import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import PackageCard from "../partials/PackageCard";
import Pagination from "../partials/Pagination";
import PackageFilters from "./PackageFilters";
import usePackageStore from "./../../../store/packageStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Packages = () => {
	const {
		packages,
		Loading,
		error,
		fetchPackages,
		currentPage,
		setCurrentPage,
		totalPackages,
		pageSize,
	} = usePackageStore();

	const totalPages = Math.ceil(totalPackages / pageSize);

	const location = useLocation();

	useEffect(() => {
		fetchPackages(currentPage);
	}, [currentPage]);

	useEffect(() => {
		return () => {
			if (location.pathname !== "/packages") {
				setCurrentPage(1);
			}
			setCurrentPage(currentPage);
		};
	}, [location.pathname, setCurrentPage]);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

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

	if (!packages) return <div>No packages found.</div>;
	return (
		<div>
			<Container fluid className="packages-container mt-3 text-center p-2">
				<Row>
					<Col lg={12} sm={12} md={12} className="mt-5 ">
						{/* <h2>All Gift Packages</h2> */}
					</Col>
				</Row>

				<Row>
					<Col lg={3} sm={12} md={3}>
						<PackageFilters />
					</Col>
					<Col lg={9} sm={12} md={9}>
						<Row className=" p-5">
							{packages.map((gift) => (
								<PackageCard key={gift.title} gift={gift} />
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

export default Packages;
