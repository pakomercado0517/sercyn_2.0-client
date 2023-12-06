import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function NavbarLinks() {
  return (
    <Navbar.Collapse>
      <Link to="/">
        <span className={`text-cyan-600 pl-2 mx-2 `}>Inicio</span>
      </Link>
      <Link to="/boats">
        <span className={`text-cyan-600 pl-2 mx-2`}>Embarcaciones</span>
      </Link>
      <Link to="/destinations">
        <span className={`text-cyan-600 pl-2 mx-2`}>Destinos</span>
      </Link>
    </Navbar.Collapse>
  );
}

export default NavbarLinks;
