import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import { HashLink } from "react-router-hash-link";
import auth from "../../Firebase.init/Firebase.init";
import logo from "../../images/loho-header-small (1).webp";
import './Header.css';

const Header = () => {
  const handleSignOut = () =>{
    signOut(auth);
  }
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="light"
        
      >
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="nav-item1" as={HashLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-item" as={HashLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link className="nav-item" as={HashLink} to="/about">
              AboutUs
            </Nav.Link>
            <Nav.Link className="nav-item" as={HashLink} to="/contacts">
              Contact
            </Nav.Link>
            <Nav.Link className="nav-item" as={HashLink} to="/blogs">
              Blogs
            </Nav.Link>
           { 
              user?.email ? 
              <>
              <p className="user_display_name">{user.displayName|| user.email}</p>
              
              <button className="border-0 bg-light nav-item" onClick={handleSignOut}>SignOut</button>
              </>
              :
           <Nav.Link className="nav-item" as={HashLink} to="/logIn">
              LogIn
            </Nav.Link>
            
            }
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
