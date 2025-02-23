import React, { useEffect } from "react";
import useProductStore from "./../../../store/productStore";
import ProductCard from "../partials/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "../partials/Pagination";
import ProductFilters from "./ProductFilters";

const ProductList = () => {
	const { products, Loading, error, fetchProducts } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, []);

	if (Loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!products) return <div>No products found.</div>;

	return (
		<div>
			<Container fluid className="packages-container mt-3 text-center p-2">
				<Row>
					<Col lg={12} sm={12} md={12}>
						<h1>All Products</h1>
					</Col>
				</Row>
				<Row>
					<Col lg={3} sm={12} md={3}>
						<ProductFilters />
					</Col>
					<Col lg={9} sm={12} md={9}>
						<Row className=" p-5">
							{products.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</Row>
					</Col>
				</Row>

				<Pagination />
			</Container>
		</div>
	);
};

export default ProductList;
