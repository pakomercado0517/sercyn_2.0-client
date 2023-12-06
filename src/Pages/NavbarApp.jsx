import React from "react";
import logo from "../Components/Images/logo_sercyn2.png";
import { Navbar } from "flowbite-react";
import NavbarLinks from "../Components/navbar/NavbarLinks";
import NavbarAuthElements from "../Components/navbar/NavbarAuthElements";

function NavbarApp() {
  return (
    <section>
      <Navbar
        className="border-solid shadow-lg shadow-slate-400 rounded-xl p-4 m-5"
        fluid
        rounded
      >
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="mr-3 h-6 sm:h-9" />
        </Navbar.Brand>
        <NavbarAuthElements />
        <NavbarLinks />
      </Navbar>
    </section>
  );
}

export default NavbarApp;
