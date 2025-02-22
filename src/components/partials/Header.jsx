import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import useAuthStore from "./../../../store/authStore";

import "./partials.css";

const Header = () => {
	const user = useAuthStore((state) => state.user);
	const logout = useAuthStore((state) => state.logout);
	return (
		<Navbar
			fixed="top"
			bg="dark"
			collapseOnSelect
			expand="lg"
			className="bg-body-tertiary"
		>
			<Container fluid className="header-container px-5">
				<Navbar.Brand as={Link} to="/">
					Gift Shop
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/about">
							About
						</Nav.Link>
						<Nav.Link as={Link} to="/categories">
							Categories
						</Nav.Link>
						<Nav.Link as={Link} to="/packages">
							Packages
						</Nav.Link>
						<Nav.Link as={Link} to="/products">
							Products
						</Nav.Link>
						<Nav.Link as={Link} to="/contact">
							Contact
						</Nav.Link>
					</Nav>
					<Nav>
						{user ? (
							<>
								<Nav.Link as={Link} to="/dashboard">
									(Welcome, {user.username || user.email})
								</Nav.Link>
								<Nav.Link onClick={logout}>Logout</Nav.Link>
							</>
						) : (
							<>
								<Nav.Link as={Link} to="/login">
									Login
								</Nav.Link>
								<Nav.Link as={Link} to="/signup">
									Signup
								</Nav.Link>
								<Nav.Link as={Link} to="/cart">
									<BsCart4 />
								</Nav.Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
