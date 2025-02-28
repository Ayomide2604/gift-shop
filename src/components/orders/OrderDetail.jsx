import { format } from "date-fns";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useOrderStore from "../../../store/orderStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Numeral from "react-numeral";
import "./orders.css";
import {
	RiPrinterLine,
	RiArrowGoBackFill,
	RiCheckboxCircleFill,
	RiEmotionNormalFill,
	RiHourglassFill,
} from "react-icons/ri";

const OrderDetail = () => {
	const { order, fetchOrderById, loading, error } = useOrderStore();
	const { orderId } = useParams();

	useEffect(() => {
		fetchOrderById(orderId);
	}, [orderId]);

	if (loading) {
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
		return <div>Error: {error}</div>;
	}

	return (
		<Container className="order-detail-container">
			<Row>
				<h1 className=" text-dark">Order Details</h1>
				<hr />
				<Col lg={12} className="mt-3 text-muted">
					<p>
						<strong>Order Number:</strong> #{order?.id}
					</p>
					<p>
						<strong>Order Date:</strong>{" "}
						{order?.created_at
							? format(new Date(order.created_at), "MMMM d, yyyy h:mm a")
							: "N/A"}
					</p>
					<p>
						<strong>Status:</strong> {order?.status}
					</p>
				</Col>
				<hr />
			</Row>
			<Row>
				<Col lg={12}>
					<h2>Order Items</h2>
					<ul className="list-group">
						{order?.items?.map((item) => (
							<li
								className="list-group-item d-flex align-items-center"
								key={item.id}
							>
								<img
									src={item.item_data?.image_url}
									alt={item.item_data?.name}
									className="item-image"
								/>
								<div className="item-details">
									<h5>
										<strong>
											{item.item_data?.name || item.item_data?.title}
										</strong>
									</h5>
									<p>
										<span className="fw-bold ">Price: </span>
										<span className="">
											₦<Numeral value={item.item_data?.price} format={"0,0"} />
										</span>
									</p>
									<p>
										<span className="fw-bold">Quantity:</span>
										<span className="">{item.quantity}</span>
									</p>
								</div>
							</li>
						))}
					</ul>
				</Col>
			</Row>
			<Row>
				<Col lg={12} className="total-amount d-flex justify-content-end mt-3">
					<p className="me-3 ">
						Total Amount: ₦<Numeral value={order?.total_price} format={"0,0"} />
					</p>
					{order?.payment_status === "pending" && (
						<Button as={Link} to={`/checkout/${order.id}`} variant="primary">
							Proceed to Checkout
						</Button>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default OrderDetail;
