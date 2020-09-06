import React from 'react';
import {Link, NavLink} from "react-router-dom";


const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  marginBottom">
        <Link className="navbar-brand" to="/">Druthi</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/movies"><b>Movies</b></NavLink>
            <NavLink className="nav-item nav-link" to="/customers"><b>Customers</b></NavLink>
            <NavLink className="nav-item nav-link" to="/rentals"><b>Rentals</b></NavLink>
            
          </div>
        </div>
      </nav>
 
     );
}
 
export default NavBar ;