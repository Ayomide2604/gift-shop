import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PackageCard from "../partials/PackageCard";
import { Link } from "react-router-dom";

const LatestPackages = ({ packages, error }) => {
	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<Container fluid className="packages-container text-center mb-3 p-5">
			<Row>
				<Col>
					<h2 className="display-2 mb-5">Latest Packages</h2>
				</Col>
			</Row>
			<Row>
				{packages.map((gift) => (
					<PackageCard key={gift.id} gift={gift} />
				))}
			</Row>
			<Row>
				<Col>
					<Button as={Link} to="/packages" variant="primary" className="btn-lg">
						View All Packages
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default LatestPackages;
