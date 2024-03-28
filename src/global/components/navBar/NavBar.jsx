import React from 'react';
import '../navBar/NavBar.scss';
import { FiSearch } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="navBarContainer">
        <img src={require('../../../assets/images/Unsplash_Symbol.png')} />
        <form>
        <FiSearch />
        <input type="text" required></input>
    </form>
    <span>Advertise</span>
    <span>Blog</span>
    <span>Unsplash</span>

    </div>
    
    
  );
};

export default NavBar;