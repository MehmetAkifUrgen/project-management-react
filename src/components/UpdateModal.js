import React, { useEffect, useState } from 'react'
import Input from './Input'
import ComboBox from './comboBox'
import EmplooyeView from './emplooyeView'
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import EmployeeService from '../service/EmployeeService';
import ProjectService from '../service/ProjectService';
import Project from '../Model/Project';
import Checkbox from './CheckBox';



export default function Modal(props) {

    let project=props.Project;
    const [updateProject,setUpdateProject] = useState(project);
    let [proj, setProj] =
        useState(new Array());

    const [active,setActive] = useState(false);
    let projectService = new ProjectService();
    const [id,setId]=useState(props.id);

    function updatededProject(event,id){
        projectService.updateProjectbyId({...updateProject},id)
        .then( pro => {
            setUpdateProject(pro);
            setProj([...proj]);
        });
    
    }

    function handleInputChange(event){
        const {name, value} = event.target;
      
        let newProject = {...updateProject};
        newProject["active"] = active;
        newProject[name] = value;
        setUpdateProject(newProject);
    }

  return (
    <div className='modal-container'>
      
     

      <Input id="projectName"
        value={updateProject.projectName}
        handleChange={handleInputChange}
        type="text"
        label="Project Name">
      </Input>
      <ComboBox options={[]} label="Customers" />
      <Checkbox id="active" 
                              handleChange={()=> setActive(!active)}
                              value={active}
                              label="Status?"></Checkbox>
      <Input id="offer"
        value={updateProject.offer}
        handleChange={handleInputChange}
        type="text"
        label="Offer"></Input>
      <Input value={updateProject.startDate} label="Start Date" type="date" id="startDate" handleChange={handleInputChange} />
      <Input value={updateProject.endDate} label="Start Date" type="date" id="endDate" handleChange={handleInputChange} />
      {/* <DatePicker className="date" onChange={d=> setEndDate(d)} value={endDate} /> */}
      {/* <ComboBox options={["kerem", "akif"]} label="Project Manager" /> */}
      {/* <Select

        isMulti
        name="emplooyes"
        options={emplooye.map((item, index) => {
          return {
            value: item.id,
            label: item.name
          }
        })}
        className="basic-multi-select"
        classNamePrefix="select"
      /> */}

      {/* {
        data === [] ? null :
          data.map(item => (
            <EmplooyeView label={item} />
          ))
      } */}
      {/* <PhoneInput
        className="phone"
        country={'tr'}
        value={phone}
        onChange={phone => setPhone(phone)}
      /> */}
      {/* <Input id="phone" name="phone" label="Tel" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required /> */}
      {/* <Input id="mail" name="mail" label="E-Mail" type="email" /> */}
      <div className='addButtonDiv'>
        <button onClick={(event)=> updatededProject(event,id)} className='project-button'>
          Update
        </button>
        
      </div>
    </div>
  )
}
