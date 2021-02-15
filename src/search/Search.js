import React from 'react';


const Search = ({searchfield, searchChange}) => {

    return(
       <div>
            <input className="pa3 ba b-green bg-lightest-blue"
            type='search' 
            placeholder='Search robots' 
            onChange={searchChange} />
       </div>


    );
}


export default Search;