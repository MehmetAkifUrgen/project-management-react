import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectModal from './Modal';
import { Table } from 'reactstrap';

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
     
       
         <div className='addButtonDiv'>
         <button onClick={openModal} className='project-button'>
            Add Project
          </button>
         </div>
         <table className='table'>
                   <thead>
                   <tr>
                       <th>Project Name</th>
                       <th>Customer Name</th>
                       <th>Situation</th>
                       <th>Start Date</th>
                       <th>End Date</th>
                       <th>Project Manager</th>
                       <th>Team Members</th>
                       <th>ProjeTech Lead</th>
                       

                   </tr>
                   </thead>
                   {/* <tbody>
                   {
                       books.map( (emp,idx) => (
                               <tr key={emp.id}>
                                   <td onMouseOver={(event) => {
                                       setBook(emp),
                                           setId(emp.id)
                                   }}>{emp.id}</td>
                                   <td>{emp.isbn}</td>
                                   <td>{emp.author}</td>
                                   <td>{emp.category}</td>
                                   <td>{emp.publisher}</td>
                                   <td>{emp.pressDate}</td>
                                   <td>{emp.bookType}</td>
                                   <td>{emp.borrowed ? "ALINABİLİR":"ÖDÜNÇTE"}</td>
                                   <td>{emp.reserved ?  "MEVCUT":"MEVCUT DEĞİL"}</td>
                                   <td><Button id="fireEmployee"
                                               buttonTitle="Delete Book"
                                               className="btn-danger"
                                               onClick={(event) => deleteBookById(event, emp.id) }></Button></td>
                               </tr>
                           )
                       )
                   }
                   </tbody> */}
               </table>
        
      
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