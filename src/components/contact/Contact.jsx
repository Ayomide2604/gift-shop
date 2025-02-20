import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
	return (
		<div>
			<Container fluid className="contact-container p-5 position-relative">
				<Row className="text-center mb-4">
					<Col>
						<h1 className="fw-bold ">Get in Touch</h1>
						<p className="text-muted">We’d love to hear from you!</p>
					</Col>
				</Row>

				<Row className="d-flex justify-content-center">
					<Col lg={6} md={6} sm={12} className="mb-3 position-relative">
						<div className="  opacity-50 rounded-3"></div>
						<img
							src="/contact/contact.jpg"
							alt="contact"
							className="contact-image w-100 h-100 rounded-3 "
							style={{ objectFit: "cover" }}
						/>
					</Col>

					<Col
						lg={6}
						md={6}
						sm={12}
						className="d-flex flex-column align-items-center"
					>
						<Form className="p-5 rounded-3 shadow-lg bg-white w-100">
							<h2 className="text-center  fw-bold">Contact Us</h2>
							<p className="text-center text-muted mb-4">
								Fill out the form and we’ll get back to you soon.
							</p>

							<Form.Group className="mb-3">
								<Form.Label className="fw-semibold">Name</Form.Label>
								<Form.Control type="text" placeholder="Enter your name" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label className="fw-semibold">Email</Form.Label>
								<Form.Control type="email" placeholder="Enter your email" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label className="fw-semibold">Subject</Form.Label>
								<Form.Control type="text" placeholder="Subject" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label className="fw-semibold">Message</Form.Label>
								<Form.Control
									as="textarea"
									placeholder="Write your message here..."
									rows={5}
								/>
							</Form.Group>

							<div className="text-center">
								<Button variant="primary" className="px-4 py-2 fw-bold">
									Send Message
								</Button>
							</div>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
