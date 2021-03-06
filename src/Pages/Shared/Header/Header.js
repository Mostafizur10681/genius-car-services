import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='header' sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={35} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-white' href="home#services">Services</Nav.Link>
                        <Nav.Link className='text-white' href="home#experts">Experts</Nav.Link>
                        {/* <NavDropdown className='text-white' title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item className='text-white' style={{ backgroundColor: 'rgb(94, 166, 169)' }} href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item className='text-white' style={{ backgroundColor: 'rgb(94, 166, 169)' }} href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item className='text-white' style={{ backgroundColor: 'rgb(94, 166, 169)' }} href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='text-white' style={{ backgroundColor: 'rgb(94, 166, 169)' }} href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                        {
                            user && <>
                                <Nav.Link className='text-white' as={Link} to="/addservice">AddService</Nav.Link>
                                <Nav.Link className='text-white' as={Link} to="/manage">Manage</Nav.Link>
                            </>
                        }
                        {
                            user ?
                                <button onClick={handleSignOut} className='btn btn-danger'>Sign Out</button>
                                :
                                <Nav.Link className='text-white' as={Link} to="/login">
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;