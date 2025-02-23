import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Dashboard = () => {
	return (
		<Container fluid className="dashboard-container">
			<Row>
				<Col lg={12} sm={12} md={12} className="text-center mt-5 pt-3">
					<h2>Welcome to the Dashboard</h2>
				</Col>
			</Row>

			<Row>
				<Col lg={12} sm={12} md={12}></Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
