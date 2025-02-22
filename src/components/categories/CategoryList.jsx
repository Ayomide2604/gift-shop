import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "../partials/Pagination";
import CategoryCard from "../partials/CategoryCard";
import useCategoryStore from "./../../../store/categoryStore";
import { useEffect } from "react";

const CategoryList = () => {
	const { categories, Loading, error, fetchCategories } = useCategoryStore();

	useEffect(() => {
		fetchCategories();
	}, []);

	if (Loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
	if (!categories) return <div>No categories found.</div>;

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
