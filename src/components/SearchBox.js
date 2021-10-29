import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input className='pa3 bg-light-blue' type='seach' onChange={searchChange} placeholder='Search robots' />
        </div>
    );
}
export default SearchBox;