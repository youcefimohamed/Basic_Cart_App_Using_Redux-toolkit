import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar() {
   const cart = useSelector(store=>store.cart)
   return (
      <>
      <Navbar bg="light" expand="lg">
         <Container>
            <Link to="/" className='navbar-brand'>CartApp</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <Link to="/" className='nav-link'>Products</Link>
                  <Link to="/cart" className='nav-link'>Cart - {cart.length}</Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
      </>
   )
}

export default NavBar;