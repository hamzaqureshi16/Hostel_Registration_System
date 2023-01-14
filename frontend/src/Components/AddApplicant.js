import React, { useState } from 'react';
import { addApplicant } from '../Service/api'; 

export default function AddApplicant() {
 const [applicantData, setApplicanData] = useState({
  StudentName:"",
  registration:""
 });

 //clconst {StudentName,registration} = applicantData;


 var handleChange = (e) => {
  
  setApplicanData({...applicantData,[e.target.name]:e.target.value.toUpperCase()});
}
var AddDetails = async (e) =>{

  const isEmpty = () =>{
    
      if(document.getElementById("StudentName").value === "" || document.getElementById('registration').value === ""){
        return true;
      }
      return false;
  }

  e.preventDefault();
  console.log('submit')
  if(!isEmpty()){
    await addApplicant(applicantData).then((result) =>{
      if(result.status === 200 && typeof(result.data)!= typeof('string')){
        
        
        document.getElementById("StudentName").value = "";
        document.getElementById('registration').value = "";
      }
      else{
        alert(result.data);
      }
    });
  }
  else{
    alert('please fill all the details')
  }

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
