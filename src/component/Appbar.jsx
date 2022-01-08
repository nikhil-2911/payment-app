import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Appbar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">PayMENT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Pay</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Appbar;
