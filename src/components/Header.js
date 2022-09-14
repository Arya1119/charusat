import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Megamenu from './Megamenu';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="#">CHARUSAT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <NavDropdown title="Home" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Homepage 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Homepage 2
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='mx-2' title="Pages" id="navDropdown" >
                        <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Feature</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Contact</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Portfolio</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Shop</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Gallery</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Price Table</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Maintenance</NavDropdown.Item>
                    </NavDropdown>

                <NavDropdown
                    title="Academics"
                    id="basic-nav-dropdown"
                    >
                    <Megamenu/>
                </NavDropdown>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header