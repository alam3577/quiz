import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Images/logo.png";

function Header() {
  return (
    <>
      <nav className="header__maincontiner">
        <NavLink to="/home" exact={true} strict>
          <img src={Logo} alt="logo_image" />
        </NavLink>
        <ul>{/* <li>Home</li> */}</ul>
      </nav>
    </>
  );
}

export default Header;
