import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ProjectModal from './Modal';
import ProjectService from '../service/ProjectService';
import {Button} from 'reactstrap'
import UpdateModal from './UpdateModal'
import Project from '../Model/Project';



function ProjectForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [project, setProject] = useState([]);
  const [update, setUpdate] = useState(false);
  const [selectedProject,setSelectedProject] = useState(new Array());
  const [id,setId]=useState("");
  const [proj,setProj]=useState(new Project());
  

  let projectService = new ProjectService();
  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    getAllProjects();
  }, []);

  

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  async function getAllProjects() {
    setProject(await projectService.getAllProjects());
  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeUpdateModal() {
    setUpdate(false);
  }
  function deleteProjectById(event,id){
    projectService.deleteProject(id)
    .then( pro => {
      setProj(pro);
      setProject([...project].filter( pro => pro.id !== id));
  });

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
      <div className='table-div'>

      <table ite  className='table'>
        <thead >
          <tr>
            <th>Project Name</th>
            <th>Customer Name</th>
            <th>Situation</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Project Manager</th>
            <th>Team Members</th>
            <th>ProjeTech Lead</th>
            <th></th>


          </tr>
        </thead>
        <tbody >
                   {
                       project.map( (pro,index) => (
                               <tr key={pro.id}>
                                   {/* <td onMouseOver={(event) => {
                                       setBook(emp),
                                           setId(emp.id)
                                   }}>{emp.id}</td> */}
                                   <td>{pro.projectName}</td>
                                   <td>""</td>
                                   <td>{pro.active ? "Active" : "Not Active"}</td>
                                   <td>{pro.startDate}</td>
                                   <td>{pro.endDate}</td>
                                   <td>""</td>
                                   <td>""</td>
                                   <td>""</td>
                                   <td><button type="button" id='updateProject'
                        
                        className='btn-primary'
                        onClick={(event) => {setSelectedProject(pro); setId(pro.id); setUpdate(true)}}
                        >Update</button></td>
                        <td><button type="button" id='updateProject'
                        
                        className='btn-danger'
                        onClick={(event) => deleteProjectById(event, pro.id) }
                        >Delete</button></td>
                                   {/* <td><Button id="fireEmployee"
                                               buttonTitle="Delete Book"
                                               className="btn-danger"
                                               onClick={(event) => deleteBookById(event, emp.id) }></Button></td> */}
                               </tr>
                           )
                       )
                   }
                   </tbody>
      </table>
      </div>


      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}

      >
       
        <ProjectModal />
        


      </Modal>
      
        
        <Modal  isOpen={update}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeUpdateModal}
        style={customStyles} >
          <UpdateModal id={id} Project={selectedProject}  /> 
        </Modal> 
      
      
    </form>
  );
}

export default ProjectForm;