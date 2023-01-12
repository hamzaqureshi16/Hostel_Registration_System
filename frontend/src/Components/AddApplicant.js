import React from 'react'
  var handleChange = (e) => {
    // console.log(e.target)
  }
  var handleSubmit = (e) =>{
    e.preventDefault();
    console.log('I am submitted')
  }
export default function AddApplicant() {
 
  return (
    <div>
      
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" className=" form-control"name='StudentName' id="StudentName" onChange={(e) => handleChange(e)}/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Registration</label>
          <input type="text" className="form-control mb-2" id="registration" name='registration' onChange={(e) => handleChange(e)}/>
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={(e) =>handleSubmit(e)}>Submit</button>
    </form>


    </div>
  )
}
