import React from "react";
import {
	RiPrinterLine,
	RiArrowGoBackFill,
	RiCheckboxCircleFill,
	RiEmotionNormalFill,
	RiHourglassFill,
} from "react-icons/ri";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const OrderDetail = () => {
	return (
		<Container className="order-detail-container">
			<Row className="order-header">
				<Col>
					<h1 className="order-title">Order Details</h1>
				</Col>
				<Col className="text-end">
					<RiPrinterLine className="icon" />
					<Link to="/dashboard">
						<RiArrowGoBackFill className="icon" />
					</Link>
				</Col>
			</Row>
			<Row className="order-content">
				{/* Example order details content */}
				<Col md={6} className="order-info">
					<p>
						<strong>Order Number:</strong> #123456
					</p>
					<p>
						<strong>Order Date:</strong> October 10, 2023
					</p>
					<p>
						<strong>Customer Name:</strong> John Doe
					</p>
				</Col>
				<Col md={6} className="order-items">
					<h2>Items</h2>
					<ul>
						<li>Product 1 - Quantity: 2</li>
						<li>Product 2 - Quantity: 1</li>
						<li>Product 3 - Quantity: 5</li>
					</ul>
				</Col>
				{/* End of example order details content */}
			</Row>
			<Row>
				<Col className="order-status">
					<RiCheckboxCircleFill className="icon" />
					<span>Order Confirmed</span>
				</Col>
				<Col className="order-status">
					<RiEmotionNormalFill className="icon" />
					<span>Processing</span>
				</Col>
				<Col className="order-status">
					<RiHourglassFill className="icon" />
					<span>Awaiting Shipment</span>
				</Col>
			</Row>
		</Container>
	);
};

export default OrderDetail;
