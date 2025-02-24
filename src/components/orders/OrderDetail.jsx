import { format } from "date-fns";
import { Container, Row, Col } from "react-bootstrap";
import useOrderStore from "../../../store/orderStore";
import "./orders.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Numeral } from "react-numeral";

const OrderDetail = () => {
	const { order, fetchOrderById, loading, error } = useOrderStore();
	const { orderId } = useParams();

	useEffect(() => {
		fetchOrderById(orderId);
	}, [orderId]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<Container className="order-detail-container">
			<Row className="order-header">
				<Col lg={12}>
					<h1 className="order-title">Order Details</h1>
				</Col>
			</Row>
			<Row className="order-content">
				<Col lg={12} className="order-info">
					<p>
						<strong>Order Number:</strong> #{order?.id}
					</p>
					<p>
						<strong>Order Date:</strong>
						{"  "}
						{order?.created_at
							? format(new Date(order.created_at), "MMMM d, yyyy h:mm a")
							: "N/A"}
					</p>
					<p>
						<strong>Status:</strong> {order?.status}
					</p>
				</Col>
				<Col lg={12} className="order-items">
					<h2>Items</h2>
					<ul className="list-group">
						{order?.items?.map((item) => (
							<li
								className="list-group-item  d-flex align-items-center"
								key={item.id}
							>
								<img
									src={item.item_data?.image_url}
									alt={item.item_data?.name}
									className="item-image"
									style={{
										height: "80px",
										width: "80px",
										objectFit: "cover",
										marginRight: "10px",
									}}
								/>
								<div className="item-details">
									<p>
										<strong>{item.item_data?.name || item.item_data?.title}</strong>
									</p>
									<p>
										Price: ₦{" "}
										<Numeral value={item.item_data?.price} format={"0,0"} />
									</p>
								</div>
							</li>
						))}
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default OrderDetail;
