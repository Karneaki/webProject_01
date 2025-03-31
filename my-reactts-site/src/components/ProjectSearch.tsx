// src/components/ProjectSearch.tsx
import React from 'react';

interface ProjectSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const ProjectSearch: React.FC<ProjectSearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <input 
        type="text" 
        placeholder="Buscar projeto por nome..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '1rem'
        }}
      />
    </div>
  );
};

export default ProjectSearch;
