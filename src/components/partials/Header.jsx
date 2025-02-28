import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import useAuthStore from "./../../../store/authStore";
import useCartStore from "./../../../store/cartStore";
import "./partials.css";

const Header = () => {
	const { cart, fetchCart } = useCartStore();
	const user = useAuthStore((state) => state.user);
	const logout = useAuthStore((state) => state.logout);
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		fetchCart();
	}, [fetchCart]);

	const handleNavLinkClick = () => {
		setExpanded(false);
	};

	return (
		<Navbar
			fixed="top"
			bg="dark"
			expand="lg"
			className="bg-body-tertiary"
			expanded={expanded}
		>
			<Container fluid className="header-container px-5">
				<Navbar.Brand as={Link} to="/" onClick={handleNavLinkClick}>
					Gift Shop
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => setExpanded(expanded ? false : "expanded")}
				/>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/about" onClick={handleNavLinkClick}>
							About
						</Nav.Link>
						<Nav.Link as={Link} to="/categories" onClick={handleNavLinkClick}>
							Categories
						</Nav.Link>
						<Nav.Link as={Link} to="/packages" onClick={handleNavLinkClick}>
							Packages
						</Nav.Link>
						<Nav.Link as={Link} to="/products" onClick={handleNavLinkClick}>
							Products
						</Nav.Link>
						<Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick}>
							Contact
						</Nav.Link>
					</Nav>
					<Nav>
						{user ? (
							<>
								<Nav.Link
									as={Link}
									to="/dashboard"
									onClick={handleNavLinkClick}
								>
									(Welcome, {user.username || user.email})
								</Nav.Link>
								<Nav.Link
									onClick={() => {
										logout();
										handleNavLinkClick();
									}}
								>
									Logout
								</Nav.Link>
							</>
						) : (
							<>
								<Nav.Link as={Link} to="/login" onClick={handleNavLinkClick}>
									Login
								</Nav.Link>
								<Nav.Link as={Link} to="/signup" onClick={handleNavLinkClick}>
									Signup
								</Nav.Link>
							</>
						)}
						<Nav.Link as={Link} to="/cart" onClick={handleNavLinkClick}>
							<BsCart4
								className="cart-icon position-absolute"
								style={{ fontSize: "20px" }}
							/>
							{cart && (
								<span
									className="cart-badge position-absolute top-25 badge rounded-pill bg-secondary p-0 d-flex justify-content-center align-items-center"
									style={{
										top: "20px",
										right: "20px",
										height: "20px",
										width: "20px",
										fontSize: "10px",
									}}
								>
									{cart.items.length > 0
										? cart.items.reduce(
												(total, item) => total + item.quantity,
												0
										  )
										: 0}
								</span>
							)}
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
