import React from "react";
import { makeStyles } from "@mui/styles";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "../App";
import "../App.css";
import Basket from './Basket';
import { display } from "@mui/system";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import Logo from "./logo.svg";
import imageAvatar from "../assets/images/image-avatar.png";
import { hover } from "@testing-library/user-event/dist/hover";





const useStyles = makeStyles((theme) => ({
  nav_bar: {
    display: "flex",
    background: "white",
    borderBottom: "2px solid gainsboro",
    marginTop: "0",
    padding: "15px",


    "@media (max-width:780px)": {
      flexDirection: "left",
      display: "block",
    },
  },
  logo: {
    display: "block",
    "@media (max-width:780px)": {
      display: "block",
      height: 15,
      justifyContent: "left",
      alignItems: "left",
    },
  },
  Linksnav: {
    "&:hover": {
      textDecoration: "underline",
      Color: "#ffa500",
    },
  },



}));

const NavigationBar = ({ count }) => {
  const classes = useStyles();
  return (
    <Navbar collapseOnSelect bg="" fixed="top" expand="lg" className={classes.nav_bar}>
      <Container fluid>

        <Navbar.Brand href="/" className="order-lg-0 mx-auto order-1">
          <img src={Logo} alt="" className={classes.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="order-lg-1 order-0" />

        <Navbar.Collapse id="responsive-navbar-nav">
          {/*<Nav className="m-2 my-lg-0"
              style={{ maxHeight: '100px'}}
    navbarScroll>*/}
          <Nav.Link
            href="#action2"
            className={classes.Linksnav}
            style={{ color: "hsl(219, 9%, 45%)" }}>
            <Typography variant="inherit" noWrap>
              Collection
            </Typography>
          </Nav.Link>

          <Nav.Link
            href="/men"
            className={classes.Linksnav}
            style={{ color: "hsl(219, 9%, 45%)" }}>
            <Typography variant="inherit" noWrap>
              Men
            </Typography>
          </Nav.Link>

          <Nav.Link
            href="/women"
            className={classes.Linksnav}
            style={{ color: "hsl(219, 9%, 45%)" }}>
            <Typography variant="inherit" noWrap>
              Women
            </Typography>
          </Nav.Link>

          <Nav.Link
            href="/about"
            className={classes.Linksnav}
            style={{ color: "hsl(219, 9%, 45%)" }}>
            <Typography variant="inherit" noWrap>
              About
            </Typography>
          </Nav.Link>

          <Nav.Link
            href="/contact"
            className={classes.Linksnav}
            style={{ color: "hsl(219, 9%, 45%)" }}>
            <Typography variant="inherit" noWrap>
              Contact
            </Typography>
          </Nav.Link>
          <Basket count={count} />
          <Avatar alt="dp" src={imageAvatar} className="ms-auto mx-2" />

          {/*</Nav>*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}


export default NavigationBar;