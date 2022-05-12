import React, { useState } from 'react'
import Input from './Input'
import ComboBox from './comboBox'
import  EmplooyeView from './emplooyeView'
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Modal() {

  let emplooye=[{value:"john",label:"john"},{value:"tony",label:"tony"},{value:"chris",label:"chris"}];
  const [data,setData]=useState([])
  const [emplooyes,setEmplooyes]=useState("select")
  const [phone,setPhone]=useState("")

  function handleClick(e){
    
    let value=e.target.value
    setData(o => [...o,value]);
    setEmplooyes(value);

    console.log(data)
  }
  console.log(phone)

  return (
    <div className='modal-container'>
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {/* <button onClick={closeModal}>close</button> */}
        
        <Input id="author"
            type="text"
            label="Project Name">
        </Input>
        <ComboBox options={["ali","ahmet"]} label="Customers" />
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>             
        <label className='checkbox-label' for="vehicle1"> Situation</label>
               <Input id="isbn"
                      
                      type="text"
                      label="Offer"></Input>
                       <Input id="date"
                      
                      type="date"
                      label="Start Date"></Input>
                       <Input id="isbn"
                      
                      type="date"
                      label="End Date"></Input>
         <ComboBox options={["kerem","akif"]} label="Project Manager" />
         <Select
    
    isMulti
    name="emplooyes"
    options={emplooye}
    className="basic-multi-select"
    classNamePrefix="select"
  />

         {
           data === [] ? null : 
              data.map(item=> (
                <EmplooyeView label={item} />
              ))
         }
         <PhoneInput
         className="phone"
  country={'tr'}
  value={phone}
  onChange={phone => setPhone(phone)}
/>
         {/* <Input id="phone" name="phone" label="Tel" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required /> */}
         <Input id="mail" name="mail" label="E-Mail" type="email"  />
         <div className='addButtonDiv'>
         <button onClick={()=>{}} className='project-button'>
            Save
          </button>
         </div>
         
          

    </div>
  )
}
