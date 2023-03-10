import React from 'react'

export default function Login() {
  return (
   
    <div className="data">
          
          <p className="page">Welcome!</p> 
          <p>NAME</p> 
          <input className="name" type="text" placeholder="Enter your name"/>
          <p>Roll No</p>
          <input className="roll" type="number" placeholder="Enter your rollno"/>
          <button className="btn">Save</button>
          <button className="btn"><a href='http://localhost:3000' target="blank">Submit</a></button>
          
    </div>
    
  )
}
