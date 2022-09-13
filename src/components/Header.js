import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
    return (
        <Navbar bg="light" variant="light">
            <Container fluid>
           
                <Navbar.Brand href="#home" >Charusat</Navbar.Brand>
            
                <Nav className=" d-flex justify-content-right">
                    <Nav.Link href="#home"> Academics </Nav.Link>
                    <Nav.Link href="#home">Admission</Nav.Link>
                    <Nav.Link href="#features">Campus Life</Nav.Link>
                    <Nav.Link href="#pricing">Research</Nav.Link>
                    <Nav.Link href="#pricing">IQCA</Nav.Link>
                    <Nav.Link href="#pricing">Know Charusat</Nav.Link>
                </Nav>
            
            </Container>
        </Navbar>
    )
}

export default Header