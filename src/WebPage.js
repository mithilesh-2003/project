import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';

function WebPage() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img style={{height:"25px"}} src="logo192.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="ContactUs">Contact</Nav.Link>
            <Nav.Link href="Gallery">Gallery</Nav.Link>
            <Nav.Link href="Shedule">Shedule</Nav.Link>
            <Nav.Link href="Service">Servicess</Nav.Link>
            <Nav.Link href="Team">Team</Nav.Link>
            <Nav.Link href="Signup">Signup</Nav.Link>
            <Nav.Link href="Faq">Faq</Nav.Link>
            <Spinner animation="grow" />;
              <Spinner animation="grow" variant="danger" />
                 <Spinner style={{marginLeft:"-30px"}} animation="border" variant="success" />
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default WebPage
