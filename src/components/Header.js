import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import Megamenu from './Megamenu';
import '../cssfolder/header.css';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="#">CHARUSAT</Navbar.Brand>
                <ul class="navbar-nav mr-auto">
                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                {/* <Navbar.Collapse id="navbarScroll"> */}
                    <NavDropdown title="Home" id="navDropdown">
                        <NavDropdown.Item href="#action3">Homepage 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Homepage 2
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='mx-3' title="Pages" id="navDropdown" >
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
                    id="navDropdown"
                    >
                    <Megamenu/>
                </NavDropdown>
                    {/* </Navbar.Collapse> */}
                    <NavDropdown className='mx-2' title="Admissions" id="navDropdown" >
                        <NavDropdown.Item href="#action3">Apply to charusat</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Campus Tour</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Scholarship</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Athletics</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Alumni</NavDropdown.Item>
                    </NavDropdown>
                <NavDropdown className='mx-2' title="Courses" id="navDropdown" >
                        <NavDropdown.Item href="#action3">Course Search</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Course 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Course 2</NavDropdown.Item>
                    </NavDropdown>
                <NavDropdown className='mx-2' title="Admissions" id="navDropdown" >
                        <NavDropdown.Item href="#action3">Apply to charusat</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Campus Tour</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Scholarship</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Athletics</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Alumni</NavDropdown.Item>
                    </NavDropdown>
                   
                    <NavDropdown className='mx-2' title="Athletics" id="navDropdown" ></NavDropdown>
                    <NavDropdown className='mx-2' title="University Life" id="navDropdown" ></NavDropdown>
                        {/* <NavItem title="ssssss">
                            Athletics
                        </NavItem>
                   
                    
                    <NavItem>
                            University Life
                        </NavItem> */}
                   
                    </ul>
            </Container>
        </Navbar>
        
    )
}

export default Header