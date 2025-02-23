import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./partials.css";
const Newsletter = () => {
	return (
		<Container fluid className="newsletter-container p-3 p-md-5 mb-3">
			<Row className="justify-content-center">
				<Col xs={12} md={10} lg={8} className="text-center">
					<h2 className="mb-3">Newsletter Updates</h2>
					<p className="mb-4">Subscribe to our newsletter to get the latest news and updates</p>
					<Form className="newsletter-form">
						<Row className="justify-content-center align-items-center g-2">
							<Col xs={12} md={8} lg={6}>
								<Form.Control
									type="email"
									placeholder="Enter email"
									className="form-control mb-3 mb-md-0"
								/>
							</Col>
							<Col xs={12} md={4} lg={3}>
								<Button 
									type="submit" 
									className="btn-primary w-100"
								>
									Subscribe
								</Button>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Newsletter;
