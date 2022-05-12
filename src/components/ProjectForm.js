import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import EmplooyeView from './emplooyeView';
import ProjectModal from './Modal'

function ProjectForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: `linear-gradient(
        '90deg',
        '#4d0ccf',
        '#3aec49'
      )`
    },
  };

  const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

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
            {/* <input
              placeholder='Add a Project'
              value={input}
              onChange={handleChange}
              name='text'
              className='project-input'
              ref={inputRef}
            /> */}
         <div className='addButtonDiv'>
         <button onClick={openModal} className='project-button'>
            Add Project
          </button>
         </div>
        </>
      )}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        
      >
          <ProjectModal/>
          
        
      </Modal>
    </form>
  );
}

export default ProjectForm;