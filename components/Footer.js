import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
<Navbar bg="dark" fixed="bottom">
  <Container>
    <Navbar.Brand href="#home" style={{color:'white'}}>Footer</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text style={{color:'white'}}>
        Signed in as: <a href="https://gizemcandemir.com.tr/" style={{color:'white'}}>Gizem Candemir</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
};
export default Footer;