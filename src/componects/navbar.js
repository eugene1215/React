import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 25 + '%'}} src="https://www.svgrepo.com/show/22181/home.svg"></img>
       </NavLink>
       <div class="container-fluid">
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
        //  data-toggle="collapse"
         data-bs-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
                <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
  </div>
         <span className="navbar-toggler-icon">Toggleable</span>
         
       </button>
       </div>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/createFrom">
               Create Record
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}