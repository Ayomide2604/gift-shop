import React, { useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import useCategoryStore from "../../../store/categoryStore";

const PackageFilters = () => {
	const { categories, fetchCategories } = useCategoryStore();

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<Card className="package-filters text-black text-center">
			<Card.Header className="fw-bold">
				Filters <i className="bi bi-funnel-fill"></i>
			</Card.Header>
			<Card.Body className="text-black">
				<Card.Text>All Categories</Card.Text>
				{categories.map((category) => (
					<Card.Text key={category.id}>{category.name}</Card.Text>
				))}
			</Card.Body>
		</Card>
	);
};

export default PackageFilters;
