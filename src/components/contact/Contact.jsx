import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="contact-overlay"></div>
			<Container className="contact-content">
				<Card className="contact-card">
					<Card.Body>
						<h2 className="text-center">Contact Us</h2>
						<Form>
							<Form.Group controlId="name">
								<Form.Label>Name</Form.Label>
								<Form.Control type="text" placeholder="Enter name" />
							</Form.Group>

							<Form.Group controlId="phone">
								<Form.Label>Phone</Form.Label>
								<Form.Control type="text" placeholder="Enter phone" />
							</Form.Group>

							<Form.Group controlId="email" className="mt-3">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>

							<Form.Group controlId="subject">
								<Form.Label>Subject</Form.Label>
								<Form.Control type="text" placeholder="Enter subject" />
							</Form.Group>

							<Form.Group controlId="message">
								<Form.Label>Message</Form.Label>
								<Form.Control as="textarea" rows={3} placeholder="Enter message" />
							</Form.Group>

							<Button variant="primary" type="submit" className="w-100 mt-3">
								Send Message
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
};

export default Contact;
