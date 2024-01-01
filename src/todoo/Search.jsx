import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import './Search.css'
function Search(props) {
    const[Count,setCount]=useState("")

    const handleChange=(event)=>{
        setCount(event.target.value)
          
    }

  return (
    <div className="">
        <input type="text" className="text" onChange={handleChange} value={Count}/>
       <Button onClick={ ()=>{ props.addItems(Count); setCount("")}}  className="btn1">
        <span>add</span>
       </Button>
    </div>
  )
}

export default Search