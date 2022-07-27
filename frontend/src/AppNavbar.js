import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';

const AppNavbar = () => {
     const [isOpen, setIsOpen] = useState(false);

     const toggle = () => setIsOpen(!isOpen);
     return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">SpringBootReact</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/clients">Clients</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
        );
}

export default AppNavbar;
