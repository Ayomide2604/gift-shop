import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CategoryCard from "../partials/CategoryCard";
import { Link } from "react-router-dom";
import useCategoryStore from "./../../../store/categoryStore";
import { useEffect } from "react";

const LatestCategories = () => {
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
						<CategoryCard key={category.id} category={category} />
					))}
				</Row>
				<Row>
					<Col>
						<Button
							as={Link}
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
