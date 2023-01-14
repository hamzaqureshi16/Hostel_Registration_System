import React, { useEffect } from 'react'
import { useState } from 'react';
import { deleteApplicant, getApplicant } from '../Service/api';
export default function ViewApplicant() {

  const [applicantData,setApplicantData] = useState([]);



  useEffect(()=>{
   getApplicantsDetails();
   
  },[]);

  const getApplicantsDetails = async () =>{
      const result =  await getApplicant();
      setApplicantData(result.data);
       }

  
  const Delete =   (registration) =>{
      deleteApplicant(registration).then(result =>{
        alert(result.data);
        getApplicantsDetails();
      });
      
 
  }
  const styleobj ={
    border: '1px solid black',
    padding: '10px',
    margin: '10px'
  }

  return (
    <div>
     <table class="table table-dark" style={styleobj}>
  <thead>
    <tr>
       
      <th scope="col">Student Name</th>
      <th scope="col">Registration</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
   {
    applicantData.map((details) => {
      return(
        <tr>
          <td>{details.studentname}</td>
          <td>{details.registration}</td>
          <td>
            <button className='bg-danger rounded' onClick={(e) => Delete(details.registration)}>Delete</button>
          </td>
        </tr>
      ) 
    })
   
   }
  </tbody>
</table>
    </div>
  )
}
