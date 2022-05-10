import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import Project from './Project';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  const addProject = project => {
    if (!project.text || /^\s*$/.test(project.text)) {
      return;
    }

    const newProjects = [project, ...projects];

    setProjects(newProjects);
    console.log(...projects);
  };

  const updateProject = (projectId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setProjects(prev => prev.map(item => (item.id === projectId ? newValue : item)));
  };

  const removeProject = id => {
    const removedArr = [...projects].filter(todo => todo.id !== id);

    setProjects(removedArr);
  };

  const completeProject = id => {
    let updatedProjects = projects.map(project => {
      if (project.id === id) {
        project.isComplete = !project.isComplete;
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <>
      <h1>Portal</h1>
      <ProjectForm onSubmit={addProject} />
      <Project
        todos={projects}
        completeTodo={completeProject}
        removeTodo={removeProject}
        updateTodo={updateProject}
      />
    </>
  );
}

export default ProjectList;