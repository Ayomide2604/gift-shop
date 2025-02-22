import React from "react";
import { NavLink } from "react-router";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./Auth.css";

const Login = () => {
	return (
		<div
			className="auth-container"
			style={{ backgroundImage: "url('/auth/login.jpg')" }}
		>
			<div className="auth-overlay"></div>
			<Container className="d-flex justify-content-center align-items-center vh-100">
				<Card className="auth-card">
					<Card.Body>
						<h2 className="text-center">Login</h2>
						<Form>
							<Form.Group controlId="email">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>
							<Form.Group controlId="password" className="mt-3">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Enter password" />
							</Form.Group>
							<Button variant="primary" type="submit" className="w-100 mt-3">
								Login
							</Button>
						</Form>
						<div className="text-center mt-3">
							<p>
								Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
							</p>
						</div>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
};

export default Login;
