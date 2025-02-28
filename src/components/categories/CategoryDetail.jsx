import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PackageCard from "../partials/PackageCard";
import useCategoryStore from "./../../../store/categoryStore";

const CategoryDetail = () => {
	const { category, Loading, error, fetchCategoryById } = useCategoryStore();
	const { id } = useParams();

	useEffect(() => {
		fetchCategoryById(id);
	}, [id, fetchCategoryById]);

	if (Loading) {
		return <div>Loading category details...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!category) return <div>No category found.</div>;

	return (
		<Container fluid className="category-detail-container mt-5">
			<Row>
				<Col lg={12} sm={12} md={12} className="text-center">
					<h1>All Category Packages {category.name}</h1>
				</Col>
			</Row>
			<Row>
				{category.packages.map((gift) => (
					<PackageCard key={gift.id} gift={gift} />
				))}
			</Row>
		</Container>
	);
};

export default CategoryDetail;
