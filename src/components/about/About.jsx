import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.css";
const About = () => {
	return (
		<Container className="mt-5">
			<Row className="text-center">
				<Col>
					<h1 className="mb-4">About Us</h1>
					<p className="lead">
						Welcome to <strong>Gift Shop</strong>, your go-to destination for
						the perfect gifts for every occasion. We believe that every gift
						should be meaningful, unique, and bring joy to the recipient.
					</p>
				</Col>
			</Row>

			<Row className="mt-4">
				<Col md={6} className="mb-4">
					<Card className="h-100 shadow-lg border-0">
						<Card.Body>
							<h3>Our Mission</h3>
							<p>
								At Gift Haven, our mission is to make gifting easy, special, and
								memorable. We curate high-quality gifts that bring happiness to
								both the giver and receiver.
							</p>
						</Card.Body>
					</Card>
				</Col>

				<Col md={6} className="mb-4">
					<Card className="h-100 shadow-lg border-0">
						<Card.Body>
							<h3> Why Choose Us?</h3>
							<ul className="list-unstyled">
								<li>Handpicked, premium-quality gifts</li>
								<li> Fast & reliable delivery</li>
								<li> Personalized gift options</li>
								<li> Exceptional customer service</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row className="mt-4">
				<Col md={6} className="mb-4">
					<Card className="h-100 shadow-lg border-0">
						<Card.Body>
							<h3> Our Story</h3>
							<p>
								Gift Haven was founded with a simple idea: to make gifting
								effortless yet meaningful. From birthdays to anniversaries, our
								carefully curated collection ensures that every moment is
								celebrated beautifully.
							</p>
						</Card.Body>
					</Card>
				</Col>

				<Col md={6} className="mb-4">
					<Card className="h-100 shadow-lg border-0">
						<Card.Body>
							<h3> Get in Touch</h3>
							<p>
								We’d love to hear from you! Have questions or need help finding
								the perfect gift? Reach out to our team anytime.
							</p>
							<p>
								<strong>Email:</strong> support@gifthaven.com <br />
								<strong>Phone:</strong> +1 (555) 123-4567
							</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
