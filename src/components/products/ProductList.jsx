import React, { useEffect } from "react";
import useProductStore from "./../../../store/productStore";
import ProductCard from "../partials/ProductCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Pagination from "../partials/Pagination";
import ProductFilters from "./ProductFilters";

const ProductList = () => {
	const {
		products,
		Loading,
		error,
		fetchProducts,
		currentPage,
		setCurrentPage,
		totalProducts,
		pageSize,
	} = useProductStore();

	const totalPages = Math.ceil(totalProducts / pageSize);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		fetchProducts(currentPage);
	}, [currentPage]);

	if (Loading) {
		return (
			<Container
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100vh" }}
			>
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</Container>
		);
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!products) return <div>No products found.</div>;

	return (
		<div>
			<Container fluid className="packages-container mt-3 text-center p-2">
				<Row className="mt-5">
					<Col lg={12} sm={12} md={12}>
						<h2>All Products</h2>
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

				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					onPageChange={handlePageChange}
				/>
			</Container>
		</div>
	);
};

export default ProductList;
