import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

const AppNavbar = () => {
     return (
     <div>
     <nav className="nav d-flex justify-content-between">
               <a className="p-2 text-muted" href="#">World</a>
               <a className="p-2 text-muted" href="#">U.S.</a>
               <a className="p-2 text-muted" href="#">Technology</a>
               <a className="p-2 text-muted" href="#">Design</a>
               <a className="p-2 text-muted" href="#">Culture</a>
               <a className="p-2 text-muted" href="#">Business</a>
               <a className="p-2 text-muted" href="#">Politics</a>
               <a className="p-2 text-muted" href="#">Opinion</a>
               <a className="p-2 text-muted" href="#">Science</a>
               <a className="p-2 text-muted" href="#">Health</a>
               <a className="p-2 text-muted" href="#">Style</a>
               <a className="p-2 text-muted" href="#">Travel</a>
             </nav>
     <Navbar color="dark" dark expand="md">
                      <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                  </Navbar>
                  </div>
                  );
}

export default AppNavbar;
