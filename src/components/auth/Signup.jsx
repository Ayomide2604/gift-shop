import React from "react";
import { NavLink } from "react-router";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./Auth.css";

const Signup = () => {
	return (
		<div
			className="auth-container"
			style={{ backgroundImage: "url('/auth/signup.jpg')" }}
		>
			<div className="auth-overlay"></div>
			<Container className="d-flex justify-content-center align-items-center vh-100 mt-5">
				<Card className="auth-card">
					<Card.Body>
						<h2 className="text-center">Sign Up</h2>
						<Form>
							<Form.Group controlId="name">
								<Form.Label>Full Name</Form.Label>
								<Form.Control type="text" placeholder="Enter your name" />
							</Form.Group>
							<Form.Group controlId="email" className="mt-3">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>
							<Form.Group controlId="password" className="mt-3">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Enter password" />
							</Form.Group>
							<Button variant="primary" type="submit" className="w-100 mt-3">
								Sign Up
							</Button>
						</Form>
						<div className="text-center mt-3">
							<p>
								Already have an account? <NavLink to="/login">Login</NavLink>
							</p>
						</div>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
};

export default Signup;
