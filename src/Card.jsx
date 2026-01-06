import React from 'react'

function Card(props) {
  return (
    <div style={{border:"solid 1px red"}}>

    <img src={props.image} alt=""/>
    <p>Movie name: {props.name}</p>
    <p>Rating:{props.rating}</p>
    </div>
  )
}

export default Card