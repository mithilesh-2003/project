import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useLocation } from 'react-router-dom';





function Home() {
  const location=useLocation();
  const username=new URLSearchParams(location.search).get('username');
  console.log(username)
  const [show,setShow]=useState(false);
  const handelClose=()=>setShow(false);
  const handelShow=()=>setShow(true);
  console.log(username)
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                {/* <Link to="/Signup">Signup</Link> */}
                <Nav.Link href="Home">Home</Nav.Link>
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="Signup">Signup</Nav.Link>
                <Nav.Link href="ForgetPassword">ForgetPassword</Nav.Link>
                <Nav.Link href="Gallery">Gallery</Nav.Link>
                <Nav.Link href="ContactUs">ContactUs</Nav.Link>
                <Nav.Link href="About">About</Nav.Link>
                <Nav.Link href="Team">Team</Nav.Link>
                <Nav.Link href="Service">Service</Nav.Link>
                <Nav.Link href="Faq">Faq</Nav.Link>
                <Nav.Link href="Shedule">Shedule</Nav.Link>
                <Nav.Link href="Logon">Logon</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                Link
                </Nav.Link>
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



        {/* slofer start */}
    
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:"400px"}}
          className="d-block w-100 "
          src="https://images.pexels.com/photos/54300/pexels-photo-54300.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height:"400px"}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/614521/pexels-photo-614521.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height:"400px"}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/54300/pexels-photo-54300.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        {/* slider end */}

        {/* card start */}
        <Row xs={1} md={2} className="g-2 mt-3 h-150">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" style={{height:"150px"}} src="https://images.pexels.com/photos/11455471/pexels-photo-11455471.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

        {/* card end */}
  welcome:{username}

    </div>
  )
}

export default Home
