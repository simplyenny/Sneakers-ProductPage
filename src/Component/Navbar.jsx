import React from "react";
import {makeStyles} from "@mui/styles";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "../App";
import { display } from "@mui/system";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import Logo from "./logo.svg";
import imageAvatar from "../assets/images/image-avatar.png";
import { hover } from "@testing-library/user-event/dist/hover";





const useStyles = makeStyles((theme) =>({
  nav_bar:{
    display: "flex",
    flexDirection: "column",    
    background: "white",
    width: "95rem",
    borderBottom: "2px solid gainsboro",
    marginTop: "0",
    padding: "15px",

    "@media (max-width:780px)": {},
  },
  logo:{
      
    "@media (max-width:780px)":{
      height: 15,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
  /*Linksnav:{
    &:hover {
      textDecoration:"underline",
      color: "orange",
    }
  }*/ 
  
  },

 

}));

const NavigationBar=()=> {
    const classes = useStyles();
    return(
        <Navbar bg="" fixed="top" expand="lg" className={classes.nav_bar}>
        <Container fluid>
         
          <Navbar.Brand href="/">
             <img src={Logo} alt="" className={classes.logo}/>
          </Navbar.Brand>

         <Navbar.Collapse id="navbarScroll">
         {/*<Nav 
         className="me-auto">*/}
            <Nav.Link 
             href="#action2"
             className={classes.Linksnav}
              style={{color: "hsl(219, 9%, 45%)"}}>
             <Typography variant ="inherit" noWrap>
               Collection
              </Typography>
            </Nav.Link>
           
           <Nav.Link 
             href="/men"
             className="my-2 my-lg-0"
             style={{color: "hsl(219, 9%, 45%)"}}>
             <Typography variant ="inherit" noWrap>
               Men
              </Typography>
            </Nav.Link>
           
          <Nav.Link 
           href="/women"
           className="my-2 my-lg-0"
           style={{color: "hsl(219, 9%, 45%)"}}>
             <Typography variant ="inherit" noWrap>
               Women
               </Typography>
               </Nav.Link>
           
               <Nav.Link 
           href="/about"
           className="my-2 my-lg-0"
           style={{color: "hsl(219, 9%, 45%)"}}>
             <Typography variant ="inherit" noWrap>
               About
               </Typography>
               </Nav.Link>

               <Nav.Link 
                 href="/contact"
                 className="my-2 my-lg-0"
                 style={{color: "hsl(219, 9%, 45%)"}}>
                 <Typography variant ="inherit" noWrap>
                   Contact
                 </Typography>
               </Nav.Link>
               <Avatar alt="dp" src={imageAvatar} className="ms-auto mx-2" />
             
           {/*</Nav>*/}
       </Navbar.Collapse>
       </Container>
</Navbar>

    );
}


export default NavigationBar;