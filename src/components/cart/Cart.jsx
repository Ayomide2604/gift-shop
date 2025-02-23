import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import useCartStore from "../../../store/cartStore";
import useAuthStore from "../../../store/authStore";
import { useEffect } from "react";
import Numeral from "react-numeral";
import { Link } from "react-router-dom";
const Cart = () => {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
	const { cart, fetchCart, loading, error } = useCartStore();

	useEffect(() => {
		fetchCart();
	}, [fetchCart]);

	if (!isAuthenticated) {
		return (
			<Container className="py-5">
				<Row>
					<Col>
						<h1 className="text-center mb-4">Shopping Cart</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="text-center">
							<Button as={Link} to="/login" className="btn btn-primary">
								Please log in to view your cart.
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}

	if (!cart) {
		return <div>Loading...</div>;
	}
	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<Container className="py-5">
			<Row>
				<Col>
					<h1 className="text-center mb-4">Shopping Cart</h1>
				</Col>
			</Row>
			{cart.items.length === 0 ? (
				<Row>
					<Col>
						<div className="text-center">
							<h1>Your cart is empty</h1>
						</div>
					</Col>
				</Row>
			) : (
				<Row>
					<Col>
						<Table responsive="sm" bordered hover className="text-center">
							<thead className="bg-light">
								<tr>
									<th>Product</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								{cart.items.map((item) => (
									<tr key={item.id}>
										<td className="align-middle">
											<img
												src={item.item_data?.image_url}
												alt="product"
												className="img-fluid rounded"
												style={{
													width: "80px",
													height: "80px",
													objectFit: "cover",
												}}
											/>
										</td>
										<td className="align-middle">
											₦<Numeral value={item.item_data?.price} format={"0,0"} />
										</td>
										<td className="align-middle">
											<div className="d-flex justify-content-center align-items-center">
												<Button variant="outline-secondary" size="sm">
													-
												</Button>
												<span className="mx-2">{item.quantity}</span>
												<Button variant="outline-secondary" size="sm">
													+
												</Button>
											</div>
										</td>
										<td className="align-middle">
											₦<Numeral value={item.subtotal} format={"0,0"} />
										</td>
									</tr>
								))}
								<tr>
									<td colSpan="3" className="text-end">
										Total:
									</td>
									<td>
										₦<Numeral value={cart.total_price} format={"0,0"} />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			)}
			<Row className="mt-4">
				<Col className="text-center">
					<Button variant="primary" size="lg">
						Proceed to Checkout
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Cart;
