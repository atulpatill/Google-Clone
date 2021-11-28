import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import "./Search.css"
import { useHistory } from 'react-router';
function Search({hidebuttons}) {

    const [input, setInput] = useState("") 

    const history = useHistory()

    const search=(e)=>{
        e.preventDefault();
        history.push("/search")
    } 

  

    return (
        <form className="search">
        <div className="search__input">
            <SearchIcon 
            className="searchicon" />
            <input  value={input} onChange={(e)=> setInput(e.target.value)}/>
            <MicIcon />

        </div>
      {
            !hidebuttons &&   
            <div className="search__buttons">
            <Button onClick={search} type="submit" variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
      }
      
        </form>
    )
}

export default Search
