import { useState } from 'react';
import './Search.css'
import useDebounce from '../../Debounce/useDebounce';

function Search({ update }) {
    const debounce = useDebounce((e) => update(e.target.value.toLowerCase()))
    return (
        <div className="search-wrapper">
            <input type="text" placeholder="Pokemon name...." id='input-wrapper' onChange={(e) => debounce(e)}/>
        </div>
    );
}

export default Search;