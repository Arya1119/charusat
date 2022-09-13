import React from 'react';
import '../cssfolder/nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {
  return (
    <Navbar style={{backgroundColor:'#192f59'}} variant="dark" >
    <Container>
      <Nav className="me-auto">
        <Nav.Link className='info' ><i class="fa-light fa-envelope-open"></i>{' '}info@charusat.ac.in </Nav.Link>
        <Nav.Link className='info'><i class="fa-thin fa-phone"></i>{' '}+91-2697-265011/21</Nav.Link>
        <Nav.Link href="#features">Accreditation & Ranking</Nav.Link>
        <Nav.Link href="#">Alumni</Nav.Link>
        <Nav.Link href="#">Careers</Nav.Link>
        <Nav.Link href="#">Students' Corner</Nav.Link>
        <Nav.Link href="#">Exam Result</Nav.Link>
        <Nav.Link href="#">Pay Fees</Nav.Link>
        <Nav.Link className='navbtn' href="#pricing">Sucess</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigationbar