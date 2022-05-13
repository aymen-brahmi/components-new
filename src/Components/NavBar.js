import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
function NavBar() {
  return (
    <div className="navi">
      <Navbar bg="light" variant="light">
    <Container className="titre">
    <Navbar.Brand  href="#home">JHON DOE</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#features">Projects</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavBar