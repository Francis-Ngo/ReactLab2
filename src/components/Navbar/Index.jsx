import React from 'react';
import NavbarButton from '../NavbarButton/Index';


function Navbar() {
  return (
    <nav className="navbar">
      <NavbarButton text="Button 1" />
      <NavbarButton text="Button 2" />
      <NavbarButton text="Button 3" />
      <NavbarButton text="Button 4" />
    </nav>
  );
}

export default Navbar;
