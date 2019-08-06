import React from 'react';


const SearchInput=(props)=>{
    return (
        <input 
            type='search' 
            onChange={(event)=>props.onSearch(event.target.value)}
            placeholder='Search...'
            className="form-control" 
        />
    )
}

export default SearchInput;