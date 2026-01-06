import React from 'react'
import { useState } from 'react'

function Login() {
    const [Email,setemail]=useState()
    const [Password,setpassword]=useState()
   //function which handle detail
   let submitdetails=async(e)=>{
    e.preventDefault()

    //send the details to the backend
    let data={Password,Email}
    let result=await fetch('http://localhost:2000/login',{
        method:'POST',
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify(data)

    })
    let finalresult=await result.json()
    alert(finalresult)

   }
   
  return (
    <>
    <h1>LOGIN FORM</h1>
    <form onSubmit={submitdetails}>
    
   <div>
    <label>Email</label><br />
    <input placeholder="text" onChange={(e)=>{setemail(e.target.value)}}/>
    </div>
    
    <div>
        <label>Password</label><br />
    <input placeholder="text" onChange={(e)=>{setpassword(e.target.value)}} />
    </div>
    <button>submit</button>
    </form>
    </>
  )
}

export default Login;

