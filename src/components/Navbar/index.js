import React from 'react'
import {Nav,NavDropdown, Row, Navbar, Form, Button, Container, Col}from 'react-bootstrap';
import '../../css/main.css'
import Logo from '../../assets/lunara1.jpg'
import Image from 'react-bootstrap/Image';

function Header() {
  return (
   <Navbar bg="transparent" expand='lg' className='border border-botom-4'>
     <Container>
     <Navbar.Brand>Lunara .</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className=''>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Product</Nav.Link>
          <Nav.Link>About Us</Nav.Link>
          <Nav.Link>Contact Us</Nav.Link>
          <Nav.Link>Flash Sale</Nav.Link>
        </Nav>
        <Nav className='mx-auto'>
          <Form>
            <Form.Group>
              <Row>
                <Col>
                <Form.Control type='text' placeholder='Search' className='custom-form'/>
                </Col>
                <Col><Button variant="primary" type="submit">Submit</Button></Col>
              </Row>
            </Form.Group>
          </Form>
        </Nav>
        <Nav>
          <Button variant="outline-primary">Login</Button>
        </Nav>
      </Navbar.Collapse>
     </Container>
   </Navbar>
  )
}

export default Header;