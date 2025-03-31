import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import ProjectSearch from './components/ProjectSearch';
import { Project } from './interfaces/Project';
import './App.css';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (project: Project) => {
    setProjects([...projects, project]);
    setShowForm(false);
    setEditingProject(null);
  };

  const handleEditProject = (updatedProject: Project) => {
    setProjects(projects.map((proj) => (proj.id === updatedProject.id ? updatedProject : proj)));
    setShowForm(false);
    setEditingProject(null);
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((proj) => proj.id !== id));
  };

  const handleEditClick = (project: Project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProject(null);
  };

  // Filtra os projetos com base no nome
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="App">
      <header>
        <h1>Gerenciamento de Projetos</h1>
      </header>

      <main>
        {showForm ? (
          <ProjectForm
            project={editingProject || undefined}
            onSubmit={editingProject ? handleEditProject : handleAddProject}
            onCancel={handleCancel}
          />
        ) : (
          <div className="content-wrapper">
            <button onClick={() => setShowForm(true)}>Novo Projeto</button>

            <ProjectSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            {/* Área de listagem com scroll */}
            <section className="project-list-container">
              <ProjectList 
                projects={filteredProjects} 
                onEdit={handleEditClick} 
                onDelete={handleDeleteProject} 
              />
            </section>
          </div>
        )}
      </main>
    </section>
  );
};

export default App;
