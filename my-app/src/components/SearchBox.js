import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa-2'>
            <input type='search' 
            placeholder='Search robots' 
            className='pa3 ba b-green bg-lightest-blue br2 mb2'
            onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;