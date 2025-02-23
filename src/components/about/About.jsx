import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
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

			<Container className="mt-4">
				<Row>
					<Col md={8} className="mb-4">
						<Card className="h-100 shadow-lg border-0">
							<Card.Body>
								<h3>Meet the Owner</h3>
								<p>
									Our founder, [Owner's Name], has always been passionate about
									creating memorable experiences through thoughtful gifts. With
									a background in [relevant background], [Owner's Name] brings a
									unique perspective to the art of gifting.
								</p>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} className="mb-4 text-center">
						<Image
							src="https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBjb3Jwb3JhdGUlMjBwaG90b3xlbnwwfHwwfHx8Mg%3D%3D"
							className="side-image"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "10px",
								boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
							}}
						/>
					</Col>
				</Row>

				<Row>
					<Col md={4} className="mb-4 text-center">
						<Image
							src="https://img.freepik.com/free-photo/happy-african-lady-looking-aside-holding-present_171337-6626.jpg?t=st=1740334248~exp=1740337848~hmac=a5474c94d5043488f4d55d051d70144cdfd0f9ed20d08ff3c9faa8f6ba2c71b1&w=1800"
							className="side-image"
							style={{
								width: "100%",
								height: "300px",
								objectFit: "cover",
								borderRadius: "10px",
								boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
							}}
						/>
					</Col>
					<Col md={8} className="mb-4">
						<Card className="h-100 shadow-lg border-0">
							<Card.Body>
								<h3>Our Mission</h3>
								<p>
									At Gift Haven, our mission is to make gifting easy, special,
									and memorable. We curate high-quality gifts that bring
									happiness to both the giver and receiver.
								</p>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>

			<Row className="mt-4">
				<Col md={12} className="mb-4">
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

				<Container className="mt-4">
					<Row>
						<Col md={8} className="mb-4">
							<Card className="h-100 shadow-lg border-0">
								<Card.Body>
									<h3> Our Story</h3>
									<p>
										Gift Haven was founded with a simple idea: to make gifting
										effortless yet meaningful. From birthdays to anniversaries,
										our carefully curated collection ensures that every moment
										is celebrated beautifully.
									</p>
								</Card.Body>
							</Card>
						</Col>

						<Col md={4} className="mb-4 text-center">
							<Image
								src="https://img.freepik.com/free-photo/christmas-new-year-shopping-concept_1258-26071.jpg?uid=R187989283&ga=GA1.1.683011030.1739465736&semt=ais_hybrid"
								className="side-image"
								style={{
									width: "100%",
									height: "300px",
									objectFit: "cover",
									borderRadius: "10px",
									boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
								}}
							/>
						</Col>
					</Row>
				</Container>
			</Row>

			<Row className="mt-4">
				<Col md={12} lg={12} sm={12} className="mb-4">
					<Card className="h-100 shadow-lg border-0">
						<Card.Body>
							<h3> Get in Touch</h3>
							<p>
								We'd love to hear from you! Have questions or need help finding
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
