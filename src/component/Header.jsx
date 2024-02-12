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
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li> */}
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
          
        </ul>
      </div>

        </nav>
    </header>
    
    </div>
    );
}
export default Header;