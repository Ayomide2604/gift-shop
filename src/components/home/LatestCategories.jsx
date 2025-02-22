import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CategoryCard from "../partials/CategoryCard";
import { NavLink } from "react-router";
const LatestCategories = ({ categories }) => {
	return (
		<>
			{/* Latest Categories */}
			<Container fluid className="categories-container text-center mb-3 p-5">
				<Row>
					<Col>
						<h2 className="display-2 mb-5">Shop by Categories</h2>
					</Col>
				</Row>
				<Row>
					{categories.map((category) => (
						<CategoryCard key={category.title} category={category} />
					))}
				</Row>
				<Row>
					<Col>
						<Button
							as={NavLink}
							to="/categories"
							variant="primary"
							className="btn-lg"
						>
							View All Categories
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default LatestCategories;
