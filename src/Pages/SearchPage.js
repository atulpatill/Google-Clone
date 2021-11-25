import React from 'react'
import Search from './Search';
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function SearchPage() {
    return (
        <div className="searchPage">
          <div className="searchPage__header">
              <Link to="/">
                  <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
              </Link>
          </div>
          <div className="searchPage__headerBody">
              <Search hidebuttons />
          </div>
          <div className="searchPage__options">
          <div className="searchPage__optionsLeft">
          <div className="searchPage__options">
             <SearchIcon />
             <Link to="/all">All</Link>
          </div>
          <div className="searchPage__options">
            <DescriptionIcon />
            <Link to="/all">News</Link>
          </div>
          <div className="searchPage__options">
            <ImageIcon/>
            <Link to="/all">Images</Link>
          </div>
          <div className="searchPage__options">
            <LocalOfferIcon />
            <Link to="/all">Shopping</Link>
          </div>
          <div className="searchPage__options">
            < RoomIcon/>
            <Link to="/all">Maps</Link>
          </div>
          <div className="searchPage__options">
            < MoreVertIcon/>
            <Link to="/all">More</Link>
          </div>
          
        </div>
        <div className="searchPage__optionsRight">
        <div className="searchPage__options">
        <Link to="/settings">Settings</Link>
          </div>
          <div className="searchPage__options">
           <Link to="/tools">Tools</Link>
          </div>
        </div>
        </div>
        </div>
    )
}

export default SearchPage
