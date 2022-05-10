import React, { useState, useEffect, useRef } from 'react';

function ProjectForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='project-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your project'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='project-input edit'
          />
          <button onClick={handleSubmit} className='project-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a Project'
            value={input}
            onChange={handleChange}
            name='text'
            className='project-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='project-button'>
            Add Project
          </button>
        </>
      )}
    </form>
  );
}

export default ProjectForm;