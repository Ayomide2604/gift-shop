import { useEffect } from "react";

import { Link } from "react-router-dom";
import Numeral from "react-numeral";
import { Button, Container, Spinner } from "react-bootstrap";

import { format } from "date-fns";
import useOrderStore from "../../../store/orderStore";
import "./orders.css";

const OrderList = () => {
	const { orders, loading, error, fetchOrders } = useOrderStore(
		(state) => state
	);

	useEffect(() => {
		fetchOrders();
	}, []);

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

	if (!orders) {
		return <div>No orders found</div>;
	}

	return (
		<div className="order-list">
			<h1 className="m-0 fw-bold mb-3">Orders</h1>
			<ul className="nav nav-pills mb-4">
				<li className="nav-item">
					<button
						className="nav-link active"
						data-bs-toggle="pill"
						data-bs-target="#all-orders"
					>
						All Orders
					</button>
				</li>
				<li className="nav-item">
					<button
						className="nav-link"
						data-bs-toggle="pill"
						data-bs-target="#ongoing-orders"
					>
						Ongoing
					</button>
				</li>
				<li className="nav-item">
					<button
						className="nav-link"
						data-bs-toggle="pill"
						data-bs-target="#failed-orders"
					>
						Failed Orders
					</button>
				</li>
			</ul>
			<div className="tab-content">
				<div className="tab-pane fade show active" id="all-orders">
					{orders.map((order) => (
						<div key={order.id} className="order-card">
							<div className="d-flex align-items-center">
								<div>
									<h6 className="fw-bold">#{order.id}</h6>
									<p>
										Total Amount: ₦
										<Numeral value={order.total_price} format={"0,0"} />
									</p>
								</div>
								<div className="ms-auto d-flex align-items-center gap-3">
									<span className={`badge ${getBadgeClass(order.status)}`}>
										{order.status}
									</span>
									<Button
										as={Link}
										to={`/dashboard/orders/${order.id}`}
										variant="primary"
									>
										View
									</Button>
								</div>
							</div>
							<p>{format(new Date(order.created_at), "MMMM d, yyyy h:mm a")}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const getBadgeClass = (status) => {
	switch (status) {
		case "pending":
			return "bg-secondary";
		case "processing":
			return "bg-info";
		case "shipped":
			return "bg-primary";
		case "delivered":
			return "bg-success";
		case "cancelled":
			return "bg-danger";
		default:
			return "bg-secondary";
	}
};

export default OrderList;
