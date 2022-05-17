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
  const [newProject,setNewProject]=useState([]);
  const [query,setQuery]=useState("")
  
  const [customerQuery,setCustomerQuery]=useState("")
  

  let projectService = new ProjectService();
  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    getAllProjects();
  }, []);

  const customerArray = ["kerem", "akif"];

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  async function getAllProjects() {
    setProject(await projectService.getAllProjects());
    setNewProject(await projectService.getAllProjects());
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

const handleSearch = (event) => {
  
  setQuery(event.target.value)
  let value=event.target.value
  //console.log(value)
  const formattedQuery = value.toLowerCase();
  const filteredData = newProject.filter((hero)=> {
    
      return contains(hero, formattedQuery);
  }
  );
  //console.log(filteredData);
  setProject(filteredData);
  setCustomerQuery(event.target.value);
};
const handleSearchForCustomer = (event) => {
  
  setQuery(event.target.customerName)
  let customerName=event.target.customerName
  //console.log(value)
  const formattedQuery = customerName.toLowerCase();
  const filteredData = newProject.filter((hero)=> {
    
      return containsCustomer(hero, formattedQuery);
  }
  );
  //console.log(filteredData);
  setProject(filteredData);
  setQuery(event.target.customerName);
};

const contains = ({ projectName, name }, query) => {
  
  console.log(projectName);
  if (projectName.toLowerCase().includes(query)) {
    return true;
  }

  return false;
};

const containsCustomer = ({ customerName, name }, query) => {
  
  console.log(customerName);
  if (customerName.toLowerCase().includes(query)) {
    return true;
  }

  return false;
};

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


      <div>
        <input className="search-textbox" value={query} type="text" placeholder='Enter a Project Name' onChange={handleSearch}  ></input>
      </div>
      <div>
        <input className="search-textbox" value={customerQuery} type="text" placeholder='Enter a Customer Name' onChange={handleSearchForCustomer}  ></input>
      </div>
      <div className='table-div'>

      <table ite  className='table'>
        <div ></div>
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
        <tbody  >
                   {
                       project.map( (pro,index) => (
                               <tr key={pro.id}>
                                   {/* <td onMouseOver={(event) => {
                                       setBook(emp),
                                           setId(emp.id)
                                   }}>{emp.id}</td> */}
                                   <td>{pro.projectName}</td>
                                   <td>{customerArray}</td>
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

      <div className='addButtonDiv'>
        <button onClick={openModal} className='project-button'>
          Add Project
        </button>
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