import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../../../api/apiServices";
import { useState, useEffect } from "react";
import PackageCard from "../partials/PackageCard";

const CategoryDetail = () => {
	const { id } = useParams();
	const [category, setCategory] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCategory = async () => {
			try {
				const data = await getCategoryById(id);
				setCategory(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchCategory();
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
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
