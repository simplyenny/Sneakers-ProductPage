import React from "react";
import {makeStyles} from "@mui/styles";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "../App.css";

const useStyles = makeStyles({

});

const navBar =()=> {

    return(
        <Navbar bg="light" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
             <img
               src="./logo.svg"
               width="30"
               height="30"
               className="d-inline-block align-top"
               alt="React Bootstrap logo"
             />
           </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="#collection">Collection</Nav.Link>
           <Nav.Link href="#men">Men</Nav.Link>
           <Nav.Link href="#women">Women</Nav.Link>
           <Nav.Link href="#about">About</Nav.Link>
           <Nav.Link href="#contact">Contact</Nav.Link>
         </Nav>
       </Navbar.Collapse>
  </Container>
</Navbar>

    );
}


export default navBar;