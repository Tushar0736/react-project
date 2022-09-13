import React from 'react'

const Search = ({handleSearchNote}) => {
  return (
    <div className='search'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input onChange={(event)=>handleSearchNote(event.target.value)} type="text"  placeholder='type to search'/>  
      
    </div>
  )
}

export default Search
