import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuthStore from "./../../../store/authStore";
import "./Auth.css";
import useCartStore from "../../../store/cartStore";
const Login = () => {
	const navigate = useNavigate();
	const { login, isAuthenticated, user } = useAuthStore();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		const success = await login(email, password);

		if (success) {
			navigate(-1) || navigate("/dashboard");
		} else {
			setError("Invalid email or password.");
		}

		setLoading(false);
	};

	return (
		<div>
			{isAuthenticated ? (
				<p className="m-5 p-5">Welcome, {user?.username}!</p>
			) : (
				<div
					className="auth-container"
					style={{ backgroundImage: "url('/auth/login.jpg')" }}
				>
					<div className="auth-overlay"></div>
					<Container className="d-flex justify-content-center align-items-center vh-100">
						<Card className="auth-card">
							<Card.Body>
								<h2 className="text-center">Login</h2>
								{error && <p className="text-danger text-center">{error}</p>}
								<Form onSubmit={handleLogin}>
									<Form.Group controlId="email">
										<Form.Label>Email</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
										/>
									</Form.Group>
									<Form.Group controlId="password" className="mt-3">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Enter password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											required
										/>
									</Form.Group>
									<Button
										variant="primary"
										type="submit"
										className="w-100 mt-3"
										disabled={loading}
									>
										{loading ? "Logging in..." : "Login"}
									</Button>
								</Form>
								<div className="text-center mt-3">
									<p>
										Don't have an account?{" "}
										<NavLink to="/signup">Sign Up</NavLink>
									</p>
								</div>
							</Card.Body>
						</Card>
					</Container>
				</div>
			)}
		</div>
	);
};

export default Login;
