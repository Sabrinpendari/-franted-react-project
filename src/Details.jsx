import React from 'react'

function Details() {
let details ={
    name: "John Doe",
    age: 30,
    city: "New York"
  }

    return (
    <> 
        <div style ={{ borderColor: 'lightblue' ,backgroundColor:"skyblue"}}>
        <Footer /> 
          <h1>user details</h1>
          <p>Name: {details.name}</p>
          <p>Age: {details.age}</p>
          <p>City: {details.city}</p>
          </div>
  
   </>
  )
}

export default Details
