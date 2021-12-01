import React from 'react'
import {Link} from 'react-router-dom';
import userImage from '../../Images/user.png';
import './Header.scss';

function Header({setSearch}) {
    return (
        <div className="header">
               <Link to="/">
           <div className="logo">Movies App</div>
           </Link>
           {/* <span className="searchbar d-inline"> */}
               <input type="search" placeholder="search here" onChange={(e)=>{setSearch(e.target.value)}} className="search"/>
           {/* </span> */}
           <div className="navigation">
               <ul>
                   <Link to="addMovie">
                   <li>Add Movie</li>
                   </Link>
               </ul>
           </div>
           <div className="user__image">
               <img src={userImage} alt="profile" />
           </div>
        </div>
    )
}

export default Header
