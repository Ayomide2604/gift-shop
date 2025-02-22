import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "../partials/Pagination";
import CategoryCard from "../partials/CategoryCard";

const CategoryList = ({ categories }) => {
	return (
		<div>
			<Container fluid className="categories-container text-center mb-3 p-5">
				<Row>
					<Col>
						<h1>Categories</h1>
					</Col>
				</Row>
				<Row className="justify-content-center mb-5">
					{categories.map((category) => (
						<CategoryCard key={category.id} category={category} />
					))}
				</Row>
				<Row>
					<Col className="col-12 d-flex justify-content-center">
						<Pagination />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CategoryList;
