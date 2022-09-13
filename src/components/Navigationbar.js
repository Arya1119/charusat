import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
function Navigationbar() {
  return (
    <Navbar bg="primary" variant="dark" >
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="#home"> info@charusat.ac.in </Nav.Link>
        <Nav.Link href="#home">+91-2697-265011/21</Nav.Link>
        <Nav.Link href="#features">Accreditation & Ranking</Nav.Link>
        <Nav.Link href="#pricing">Alumni</Nav.Link>
        <Nav.Link href="#pricing">Careers</Nav.Link>
        <Nav.Link href="#pricing">Students' Corner</Nav.Link>
        <Nav.Link href="#pricing">Exam Result</Nav.Link>
        <Nav.Link href="#pricing">Pay Fees</Nav.Link>
        <Button variant="success" >Success</Button>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigationbar