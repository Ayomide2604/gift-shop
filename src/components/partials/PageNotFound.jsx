import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const PageNotFound = () => {
	return (
		<Container fluid className="page-not-found-container">
			<Row className="d-flex 	justify-content-center align-items-center mt-5 ">
				<Col lg={12} sm={12} md={12} className="text-center my-3 pt-3">
					<h2>404 Not Found</h2>
					<img
						className="img-fluid"
						src="/404.jpg"
						alt="404 Not Found"
						style={{ width: "50%", height: "auto" }}
					/>
					<p>The page you are looking for does not exist.</p>
					<Button as={Link} to="/" variant="outline-dark">
						Go to HomePage
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default PageNotFound;
