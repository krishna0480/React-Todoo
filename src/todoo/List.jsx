import React from 'react'
import './List.css'
function List(props) {
  return (
    <div className='list'>
        <li onClick={()=>props.deleteItem(props.id)} className='list'>
            {props.text}
        </li>
    </div>
  )
}

export default List