import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar(){
return(
<nav className="navbar navbar-light bg-light">
  <Link className="navbar-brand" href="#">
    <img src="img" width="30" height="30" class="d-inline-block align-top" alt="">
    RealDeal
  </Link>
</nav>
);

}