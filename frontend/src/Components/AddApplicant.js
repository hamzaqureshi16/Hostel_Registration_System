import React, { useState } from 'react';
import { addApplicant } from '../Service/api'; 

export default function AddApplicant() {
 const [applicantData, setApplicanData] = useState({
  StudentName:"",
  registration:""
 });

 //clconst {StudentName,registration} = applicantData;


 var handleChange = (e) => {
  
  setApplicanData({...applicantData,[e.target.name]:e.target.value});
}
var AddDetails = async (e) =>{
  e.preventDefault();
  console.log('submit')
  await addApplicant(applicantData);

}


  return (
    <div>
      
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className=" form-control"name='StudentName' id="StudentName" onChange={(e) => handleChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Registration</label>
          <input type="text" className="form-control mb-2" id="registration" name='registration' onChange={(e) => handleChange(e)}/>
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={(e) => AddDetails(e)}>Submit</button>
    </form>


    </div>
  )
}
