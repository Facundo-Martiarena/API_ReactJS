import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
const SearchBar = ({handleSearch}) => {

    const [search, setSearch] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault(); 
        handleSearch(search);
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className='search-bar ui '>
            <form className='ui form' style={{ textAlign: 'center' }}>
                <img src="https://i.ibb.co/K73sGcW/iconyt.png" alt="iconyt" border="0"></img>
                <div className="input-group rounded">
                    <input onChange={handleChange} name='video-search' type="text" value={search} className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button className="input-group-text border-0 search-icon" id="search-addon" onClick={handleSubmit}>
                        <BsSearch style={{ cursor: 'pointer' }} />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
