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
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';


function SearchPage() {

   const [{term}] = useStateValue();

   const { data } = useGoogleSearch(term);
   
   console.log(data);

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
    {
          // If we have `term` then only show this data
          term && data && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term} </p>

          {/* Loop all the data by using map function and show the result of search term on web page  */}

          {/* {data?.itmes.map((item)=>(
              <div className="searchPage__result">
              <a href={item.Link} className="searchPage__resultLink">

              {item.pagemap?.cse_images?.length > 0 && item.pagemap?.cse_images[0]?.src(
               <img src={item.pagemap?.cse_images[0]?.src} className="searchPage__resultImage"/>
              )}
               
                {item.displayLink}
              </a>
 
              <a href={item.Link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultDescription">{item.snippet}</p>
              </div>
            ))
          }
          */}


        </div>)
        }
        </div>
    )
}

export default SearchPage
