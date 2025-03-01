import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useAuthStore from "./../../../store/authStore";
import { Navigate } from "react-router-dom";
const Profile = () => {
	const user = useAuthStore((state) => state.user);
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	return (
		<Container fluid>
			<Row>
				<Col>
					<h1>Profile Page</h1>
				</Col>
			</Row>
			<Form>
				<Row className="">
					<Col lg={6}>
						<Form.Group controlId="formFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" name="firstName" />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="formLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" name="lastName" />
						</Form.Group>
					</Col>
					<Col lg={6}>
						<Form.Group controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" name="email" />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="formUsername">
							<Form.Label>Username</Form.Label>
							<Form.Control type="text" name="username" />
						</Form.Group>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

export default Profile;
