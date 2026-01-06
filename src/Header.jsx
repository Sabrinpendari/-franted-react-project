import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
<>
<div>
<header style={{display:'flex',justifyContent:'space-evenly',border:'solid 1px black'}}>
  <div>
  <img height={50} width={50} style={{borderRadius:"50%",display:'flex',alignItems:'center'}}  src="https://res.cloudinary.com/dhdepk5ib/image/upload/v1757696461/samples/ecommerce/leather-bag-gray.jpg" alt="" />
  <b>MY MART</b>
  </div>
  <nav style={{display:'flex' ,gap:'20px',alignItems:'center'}}>
    <link to={'/'}><a href="">Home</a></link>
    <link to={'/about'}><a href="">About</a></link>
    <link to={'/register'}><a href="">Register</a></link>
    <link to={'/logi'}><a href="">Login</a></link>
    <link to={'/products'}><a href="">Products</a></link>
    
  </nav>
</header>
</div>
</>

  )
}

export default Header