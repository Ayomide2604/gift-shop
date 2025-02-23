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
						Welcome to <strong>Gift Shop</strong>, your ultimate destination for
						finding the perfect gifts that speak from the heart. We believe that
						every gift should tell a story, be unique, and bring joy to both the
						giver and the receiver.
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
									Our founder, [Owner's Name], has always been driven by a
									passion for creating unforgettable experiences through
									thoughtful gifts. With a background in [relevant background],
									[Owner's Name] brings a unique perspective to the art of
									gifting, ensuring that every item in our collection is
									handpicked with love and care.
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
									At Gift Shop, our mission is to transform the art of gifting
									into a seamless and joyful experience. We meticulously curate
									high-quality gifts that are designed to create lasting
									memories and bring happiness to both the giver and the
									receiver.
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
							<h3>Why Choose Us?</h3>
							<ul className="list-unstyled">
								<li>Handpicked, premium-quality gifts that stand out</li>
								<li>Fast & reliable delivery to ensure timely surprises</li>
								<li>Personalized gift options to add a personal touch</li>
								<li>Exceptional customer service that puts you first</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>

				<Container className="mt-4">
					<Row>
						<Col md={8} className="mb-4">
							<Card className="h-100 shadow-lg border-0">
								<Card.Body>
									<h3>Our Story</h3>
									<p>
										Gift Shop was born from a simple idea: to make gifting
										effortless yet meaningful. From birthdays to anniversaries,
										our carefully curated collection ensures that every moment
										is celebrated beautifully, with gifts that are as unique as
										the people receiving them.
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
							<h3>Get in Touch</h3>
							<p>
								We'd love to hear from you! Whether you have questions or need
								help finding the perfect gift, our team is here to assist you
								every step of the way.
							</p>
							<p>
								<strong>Email:</strong> support@giftshop.com <br />
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
