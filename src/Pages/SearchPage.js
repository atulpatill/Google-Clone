import React from 'react'
import Search from './Search';
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./SearchPage.css"


function SearchPage() {
    return (
        <div className="searchPage">
          <div className="searchPage__header">
              <Link to="/">
                  <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
              </Link>
         
          <div className="searchPage__headerBody">
              <Search hidebuttons />
         
          <div className="searchPage__options">
          <div className="searchPage__optionsLeft">
          <div className="searchPage__option">
             <SearchIcon />
             <Link to="/all">All</Link>
          </div>
          <div className="searchPage__option">
            <DescriptionIcon />
            <Link to="/all">News</Link>
          </div>
          <div className="searchPage__option">
            <ImageIcon/>
            <Link to="/all">Images</Link>
          </div>
          <div className="searchPage__option">
            <LocalOfferIcon />
            <Link to="/all">Shopping</Link>
          </div>
          <div className="searchPage__option">
            < RoomIcon/>
            <Link to="/all">Maps</Link>
          </div>
          <div className="searchPage__option">
            < MoreVertIcon/>
            <Link to="/all">More</Link>
          </div>
          
        </div>
        <div className="searchPage__optionsRight">
        <div className="searchPage__option">
        <Link to="/settings">Settings</Link>
          </div>
          <div className="searchPage__option">
           <Link to="/tools">Tools</Link>
          </div>
        </div>
        </div>
        </div>
        </div>
        <div className="searchPage__results">
          <p className="searchPage__resultCount">About 48,20,000 results (0.61 seconds)</p>
             <a href="" className="searchPage__resultLink">
               <img src="https://avatars.githubusercontent.com/u/69110542?v=4" className="searchPage__resultImage"/>
               github.com
             </a>

             <a href="" className="searchPage__resultTitle">
               <h2>Camel Coder</h2>
             </a>
             <p className="searchPage__resultDescription">he has 13 repo available dude, Follow him on github</p>
        </div>
        </div>
    )
}

export default SearchPage
