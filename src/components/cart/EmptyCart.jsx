import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const EmptyCart = () => {
	return (
		<Container fluid className="page-not-found-container">
			<Row className="d-flex 	justify-content-center align-items-center mt-5 ">
				<Col lg={12} sm={12} md={12} className="text-center my-3 pt-3">
					<h2>Your Cart is Empty</h2>
					<img
						className="img-fluid"
						src="/cart/emptycart.avif"
						alt="Empty Cart Page"
						style={{ width: "300px", height: "300px", objectFit: "contain" }}
					/>
					<p></p>
					<Button as={Link} to="/" variant="outline-dark">
						Go to HomePage
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default EmptyCart;
