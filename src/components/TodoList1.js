import React from 'react'

function Todolist1(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-regular fa-trash"
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default Todolist1;