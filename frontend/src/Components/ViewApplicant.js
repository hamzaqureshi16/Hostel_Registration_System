import React from 'react'

export default function ViewApplicant() {
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
    </tr>
  </thead>
  <tbody>
    <tr>
       
      <td>Hamza</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
