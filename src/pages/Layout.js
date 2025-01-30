import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, ListGroup, ListGroupItem, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <Container fluid className="p-0">
      {/* Navbar with no margin-top and reduced height */}
      <Navbar bg="dark" variant="dark" expand="lg" className="w-100 navbar-custom">
        <Container fluid className="p-0">
          <Navbar.Brand href="#">𝐅𝐨𝐨𝐝𝐢𝐞 𝐏𝐥𝐚𝐜𝐞</Navbar.Brand>
          
          {/* Adjust the navbar toggle button to align to the right */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Align the links in a row (even alignment) */}
            <Nav className="ms-auto d-flex align-items-center navbar-links">
              <Nav.Link className="btn-outline-light" as={Link} to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                </svg> Home
              </Nav.Link>
              <Nav.Link className="btn-outline-light" as={Link} to="about">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" className="bi bi-file-person" viewBox="0 0 16 16">
                  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg> About
              </Nav.Link>

              {/* "Menu" link with dropdown */}
              <NavDropdown title="Menu" id="basic-nav-dropdown" className="text-center">
                <NavDropdown.Item as={Link} to="fastfood">Fast Food</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="meat">Meat</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="backery">Backery</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="drinks">Drinks</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="salads">Salads</NavDropdown.Item>
              </NavDropdown>

              {/* Contact Link */}
              <Nav.Link className="btn-outline-light" as={Link} to="contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                </svg> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="mt-3 p-5">
        <Outlet />
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-5 w-100">
        <Container fluid className="p-0">
          <Row className="justify-content-center text-center">
            {/* About Section */}
            <Col md={3} sm={6} className="mb-3">
              <h5>About</h5>
              <p>At FoodiePlace, we believe food should not only taste great but also tell a story...</p>
            </Col>

            {/* Quick Links Section */}
            <Col md={3} sm={6} className="mb-3">
              <h5>Quick Links</h5>
              <ListGroup>
                <ListGroupItem action href="/" className="bg-dark text-white border-0 footer-link">
                  <i className="bi bi-house-door"></i> Home
                </ListGroupItem>
                <ListGroupItem action href="/about" className="bg-dark text-white border-0 footer-link">
                  <i className="bi bi-file-person"></i> About
                </ListGroupItem>
                <ListGroupItem action href="/menu" className="bg-dark text-white border-0 footer-link">
                  <i className="bi bi-menu-button-wide"></i> Menu
                </ListGroupItem>
                <ListGroupItem action href="/contact" className="bg-dark text-white border-0 footer-link">
                  <i className="bi bi-person-lines-fill"></i> Contact
                </ListGroupItem>
              </ListGroup>
            </Col>

            {/* Contact Section */}
            <Col md={3} sm={6} className="mb-3">
              <h5>Contact</h5>
              <p>Email: foodieplace@gmail.com</p>
              <p>Phone: 8122727246</p>
            </Col>

            {/* Follow Us Section */}
            <Col md={3} sm={6} className="mb-3">
              <h5>Follow Us</h5>
              <ListGroup>
                <ListGroupItem action href="https://facebook.com" className="bg-dark text-white border-0 footer-link" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i> Facebook
                </ListGroupItem>
                <ListGroupItem action href="https://twitter.com" className="bg-dark text-white border-0 footer-link" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i> Twitter
                </ListGroupItem>
                <ListGroupItem action href="https://instagram.com" className="bg-dark text-white border-0 footer-link" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i> Instagram
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>

          <Row>
            <Col className="text-center pt-4">
              <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Inline CSS */}
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        .navbar-custom {
          margin-top: 0 !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        footer {
          margin-top: 30px;
        }

        footer a {
          color: #fff;
          text-decoration: none;
        }

        footer .footer-link:hover {
          color: #f8f9fa;
        }

        footer .footer-link i {
          margin-right: 10px;
        }
      `}</style>
    </Container>
  );
}

export default Layout;
