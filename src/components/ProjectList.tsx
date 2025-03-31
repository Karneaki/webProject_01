// src/components/ProjectList.tsx
import React from 'react';
import { Project } from '../interfaces/Project';

interface ProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lista de Projetos</h2>
      {projects.length === 0 && <p>Nenhum projeto cadastrado.</p>}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong> ({project.status})
            <p>{project.description}</p>
            <div className='button-group'>
            <button onClick={() => onEdit(project)}>Editar</button>
            <button onClick={() => onDelete(project.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
