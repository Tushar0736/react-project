import React from 'react'

const Note = ({id, text,date ,handleDeleteNote}) => {
  return (
    <div className='Note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{ date}</small>
        <i onClick = {()=> handleDeleteNote(id)}  className="fa-solid fa-x"></i>

      </div>
      
    </div>
  )
}

export default Note;
