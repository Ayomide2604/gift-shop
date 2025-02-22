import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router";
import "./partials.css";

const Header = () => {
	return (
		<Navbar
			fixed="top"
			bg="dark"
			collapseOnSelect
			expand="lg"
			className="bg-body-tertiary"
		>
			<Container fluid className="header-container px-5">
				<Navbar.Brand as={NavLink} to="/">
					Gift Shop
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/about">
							About
						</Nav.Link>
						<Nav.Link as={NavLink} to="/categories">
							Categories
						</Nav.Link>
						<Nav.Link as={NavLink} to="/packages">
							Packages
						</Nav.Link>
						<Nav.Link as={NavLink} to="/contact">
							Contact
						</Nav.Link>
						{/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
					<Nav>
						<Nav.Link as={NavLink} to="/login">
							Login
						</Nav.Link>
						<Nav.Link as={NavLink} to="/signup">
							Signup
						</Nav.Link>
						<Nav.Link as={NavLink} to="/cart">
						<i class="bi bi-cart-check-fill"></i>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
