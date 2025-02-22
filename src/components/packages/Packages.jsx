import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PackageCard from "../partials/PackageCard";
import Pagination from "../partials/Pagination";
import PackageFilters from "../partials/PackageFilters";
const Packages = ({ packages }) => {
	return (
		<div>
			<Container fluid className="packages-container mt-3 text-center p-2">
				<Row>
					<Col lg={12} sm={12} md={12}>
						<h1>All GiftPackages</h1>
					</Col>
				</Row>
				<Row>
					<PackageFilters />
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
