import React from 'react'
import {useState} from 'react';

const AddNote = ({handleAddNote}) => {
    const[noteText,setNoteText]=useState('');
    const charlimit=200;

    const handleChange=(event)=>{
        if(charlimit - event.target.value.length>=0)
         setNoteText(event.target.value);

    };
    const handleSaveClick =()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');

        }

    }



  return (
    <div className='Note new'>
        <textarea  cols='8' rows='6' placeholder='Type to add a note...' value={noteText} onChange={handleChange}>

        </textarea>
        <div className='note-footer'>
            <small>{charlimit - noteText.length} remaining </small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
      
    </div>
  )
}

export default AddNote
