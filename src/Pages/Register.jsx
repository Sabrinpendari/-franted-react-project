import React from 'react'
import { useState } from 'react'

function Register() {
    const [Username,setusename]=useState()
    const [Email,setemail]=useState()
    const [Password,setpassword]=useState()
   //function which handle details
   let submitdetails=async(e)=>{
    e.preventDefault()

    //send the details to the backend
    let data={Username,Password,Email}
    let result=await fetch('http://localhost:2000/register',{
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
    <h1>RGISTRATION FORM</h1>
    <form onSubmit={submitdetails}>
    <div>
        <lable>Usrename</lable><br />
        <input placeholder="text" onChange={(e)=>{setusername(e.target.value)}}/>
        </div>

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

export default Register

