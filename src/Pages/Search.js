import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
function Search() {
    return (
        <form className="search">
        <div className="search__input">
            <SearchIcon />
            <input />
            <MicIcon />
            <Button type="submit" variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>

        </div>
        </form>
    )
}

export default Search
