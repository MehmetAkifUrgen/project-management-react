import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Project({ projects, completeProject, removeProject, updateProject }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateProject(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <ProjectForm edit={edit} onSubmit={submitUpdate} />;
  }

  return  projects.map((project, index) => (
    <div
      className={project.isComplete ? 'project-row complete' : 'project-row'}
      key={index}
    >
      <div key={project.id} onClick={() => completeProject(project.id)}>
        {project.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeProject(project.id)}
          className='delete-icon' />
        <TiEdit
          onClick={() => setEdit({ id: project.id, value: project.text })}
          className='edit-icon' />
      </div>
    </div>
  ));
}

export default Project;