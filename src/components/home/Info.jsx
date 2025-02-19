import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Info = () => {
	return (
		<Container fluid className="info-container mb-3 p-3">
			<Row className="info-row p-3">
				<Col lg={4} md={4} sm={12} className=" info-item mb-3">
					<i className="bi bi-gift "></i>
					<h3 className=" mb-3">How To Place an Order</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
				</Col>
				<Col lg={4} md={4} sm={12} className=" info-item mb-3">
					<i className="bi bi-credit-card"></i>
					<h3 className=" mb-3">Payment Methods</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
				</Col>
				<Col lg={4} md={4} sm={12} className=" info-item mb-3">
					<i className="bi bi-truck"></i>
					<h3 className=" mb-3">Shipping & Delivery</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Info;
