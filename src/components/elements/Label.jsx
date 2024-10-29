import React from 'react'
import '../styles/Label.css'

function Label(props) {
  return (
    <div className='card-tag'>
        <span></span>
        <div>{props.tag}</div>
    </div>
  )
}

export default Label