import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CategoryDetail = () => {
	return (
		<Container fluid className="category-detail-container mt-5">
			<Row>
				<Col lg={12} sm={12} md={12} className="text-center">
					<h1>All Category Packages </h1>
				</Col>
			</Row>
			<Row></Row>
		</Container>
	);
};

export default CategoryDetail;
