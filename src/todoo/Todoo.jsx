import React from 'react'
import Search from './Search'
import { useState } from 'react'
import List from './List'
import './Todoo.css'
function Todoo() {
  const[items,setItems]=useState([])


const addItems=(Count)=>{
  setItems((preItem)=>{
    return[...preItem,Count]
  }) 
  console.log(items)
}

const deleteItem = (id)=>{
  setItems((preItem)=>{
    return preItem.filter((items,index)=>{
     return index!==id
    })
  })
}
  return (
    <div className='modern'>
    <h1>Todoo List</h1>
      <Search addItems={addItems}/>
      {items.map((items,index)=>{
        return <List key={index} text={items} deleteItem={deleteItem} id={index}/>
      })}
    
    </div>
  )
}

export default Todoo