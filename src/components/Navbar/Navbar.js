import React, {useState} from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
    const [clicked, setClicked]=useState(false);
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="logo" className="logo-img"></img>
        <div className="title">Niko Paints</div>
      </div>
      <div>
        <ul id="navbar" className={clicked ? "#navbar active" : "navbar"}>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#whyus">Why Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={() => setClicked(!clicked)}>
        {clicked ? (
          <CloseIcon className="close-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
