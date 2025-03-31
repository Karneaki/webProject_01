// src/interfaces/Project.ts
export interface Project {
    id: number;
    name: string;
    description: string;
    status: 'planejamento' | 'em andamento' | 'concluído';
  }
  