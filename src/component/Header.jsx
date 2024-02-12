import React from "react";
import {Link} from "react-router-dom";

export const Header=()=>{
    return (
  <div>
    <header>
        <nav  className="navbar navbar-expand-lg navbar-light ">

        
        <Link to="/" className="h11 nav-link">
            Too Doo !!!
            
        </Link>
        <div className="collapse navbar-collapse flex" id="navbarNav">
        <ul className="navbar-nav">
          
          <li className="nav-item ">
            <Link to="/" className="nav-link button" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/note" className="nav-link button" >
              Create Post
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/read"  className="nav-link button" >
              All post
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/" className="nav-link button" >
              Log in
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/" className="nav-link button" >
              Sign up
            </Link>
          </li>
          
        </ul>
      </div>

        </nav>
    </header>
    
    </div>
    );
}
export default Header;