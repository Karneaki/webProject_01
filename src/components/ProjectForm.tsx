// src/components/ProjectForm.tsx
import React, { useState, useEffect } from 'react';
import { Project } from '../interfaces/Project';

interface ProjectFormProps {
  project?: Project;
  onSubmit: (project: Project) => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSubmit, onCancel }) => {
  const [name, setName] = useState(project ? project.name : '');
  const [description, setDescription] = useState(project ? project.description : '');
  const [status, setStatus] = useState<Project['status']>(project ? project.status : 'planejamento');

  // Atualiza os valores caso o projeto seja alterado (para edição)
  useEffect(() => {
    if (project) {
      setName(project.name);
      setDescription(project.description);
      setStatus(project.status);
    }
  }, [project]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: Project = {
      id: project ? project.id : Date.now(),
      name,
      description,
      status,
    };
    onSubmit(newProject);
    setName('');
    setDescription('');
    setStatus('planejamento');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{project ? 'Editar Projeto' : 'Novo Projeto'}</h2>
      <div>
        <label>Nome:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Descrição:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value as Project['status'])}>
          <option value="planejamento">Planejamento</option>
          <option value="em andamento">Em Andamento</option>
          <option value="concluído">Concluído</option>
        </select>
      </div>
      <button type="submit">Salvar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default ProjectForm;
