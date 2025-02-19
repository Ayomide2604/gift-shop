import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./partials.css";
const Newsletter = () => {
	return (
		<Container fluid className="newsletter-container p-5 mb-3">
			<Row>
				<Col lg={12} md={12} sm={12} className="text-center p-3">
					<h2 className="mb-3">Newsletter Updates</h2>
					<p>Subscribe to our newsletter to get the latest news and updates</p>
					<Form className="form-container d-flex justify-content-center p-3">
						<Form.Group
							controlId="email"
							className=" form-group d-flex justify-content-center p-3   "
						>
							<Form.Control
								type="email"
								placeholder="Enter email"
								className=" form-control m-2"
							/>
							<Button type="submit" className="btn-primary  m-2">
								Subscribe
							</Button>
						</Form.Group>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Newsletter;
