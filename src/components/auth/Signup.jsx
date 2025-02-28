import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./auth.css";
import useAuthStore from "../../../store/authStore";

const Signup = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");

	const { signup } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signup(username, email, password, first_name, last_name);
			navigate("/login");
		} catch (error) {
			console.error("Signup error:", error);
		}
	};

	return (
		<div
			className="auth-container"
			style={{ backgroundImage: "url('/auth/signup.jpg')" }}
		>
			<div className="auth-overlay"></div>
			<Container className="d-flex justify-content-center align-items-center min-vh-100">
				<Card className="auth-card w-100" style={{ maxWidth: "400px" }}>
					<Card.Body>
						<h2 className="text-center">Sign Up</h2>
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="username">
								<Form.Label>Username</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your username"
									name="username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</Form.Group>
							<Form.Group controlId="first_name" className="mt-3">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your first name"
									name="first_name"
									value={first_name}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</Form.Group>
							<Form.Group controlId="last_name" className="mt-3">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your last name"
									name="last_name"
									value={last_name}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</Form.Group>
							<Form.Group controlId="email" className="mt-3">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>
							<Form.Group controlId="password" className="mt-3">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Enter password"
									name="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Group>
							<Button variant="primary" type="submit" className="w-100 mt-3">
								Sign Up
							</Button>
						</Form>
						<div className="text-center mt-3">
							<p>
								Already have an account? <Link to="/login">Login</Link>
							</p>
						</div>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
};

export default Signup;
