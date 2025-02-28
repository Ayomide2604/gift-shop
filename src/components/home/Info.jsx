import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Info = () => {
	return (
		<Container fluid className="info-container mb-3 p-3">
			<Row className="g-4">
				<Col lg={4} md={4} sm={12}>
					<Card className="info-item h-100 text-center">
						<Card.Body>
							<i className="bi bi-gift-fill" style={{ color: "#5243C2" }}></i>
							<Card.Title>How To Place an Order</Card.Title>
							<Card.Text>
								Browse our curated collection of gifts and packages. Select your
								favorite items and add them to your cart.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} md={4} sm={12}>
					<Card className="info-item h-100 text-center">
						<Card.Body>
							<i
								className="bi bi-credit-card-fill mb-3"
								style={{ color: "#5243C2" }}
							></i>
							<Card.Title className="mb-3">Payment Methods</Card.Title>
							<Card.Text>
								We accept all major credit/debit cards for your convenience.
								Your payment information is always protected.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} md={4} sm={12}>
					<Card className="info-item h-100 text-center">
						<Card.Body>
							<i
								className="bi bi-truck-front-fill mb-3"
								style={{ color: "#5243C2" }}
							></i>
							<Card.Title className="mb-3">Shipping & Delivery</Card.Title>
							<Card.Text>
								Fast and reliable delivery across Nigeria. We ensure your gifts
								arrive safely and on time.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Info;
