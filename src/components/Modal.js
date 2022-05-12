import React from 'react'
import Input from './Input'
import ComboBox from './comboBox'

export default function Modal() {
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
                       <Input id="isbn"
                      
                      type="date"
                      label="Start Date"></Input>
                       <Input id="isbn"
                      
                      type="date"
                      label="End Date"></Input>
         <ComboBox options={["kerem","akif"]} label="Project Manager" />

    </div>
  )
}
