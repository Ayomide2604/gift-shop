import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Pagination from "../partials/Pagination";
import CategoryCard from "../partials/CategoryCard";
import useCategoryStore from "./../../../store/categoryStore";
import { useEffect } from "react";

const CategoryList = () => {
	const {
		categories,
		Loading,
		error,
		fetchCategories,
		currentPage,
		setCurrentPage,
		totalCategories,
		pageSize,
	} = useCategoryStore();

	const totalPages = Math.ceil(totalCategories / pageSize);
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		fetchCategories(currentPage);
	}, [currentPage]);

	useEffect(() => {
		return () => {
			if (location.pathname !== "/categories") {
				setCurrentPage(1);
			}
			setCurrentPage(currentPage);
		};
	}, [location.pathname, setCurrentPage]);

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
						<Pagination
							totalPages={totalPages}
							currentPage={currentPage}
							onPageChange={handlePageChange}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CategoryList;
