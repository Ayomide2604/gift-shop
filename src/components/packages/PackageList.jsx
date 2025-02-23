import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PackageCard from "../partials/PackageCard";
import Pagination from "../partials/Pagination";
import PackageFilters from "./PackageFilters";
import usePackageStore from "./../../../store/packageStore";
import { useEffect } from "react";

const Packages = () => {
	const { packages, Loading, error, fetchPackages } = usePackageStore();

	useEffect(() => {
		fetchPackages();
	}, []);

	if (Loading) {
		return <div>Loading...</div>;
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

				<Pagination />
			</Container>
		</div>
	);
};

export default Packages;
