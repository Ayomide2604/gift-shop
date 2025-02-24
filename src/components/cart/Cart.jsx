import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import useCartStore from "../../../store/cartStore";
import useAuthStore from "../../../store/authStore";
import useOrderStore from "../../../store/orderStore";
import { useNavigate } from "react-router-dom";
import Numeral from "react-numeral";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Cart = () => {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
	const user = useAuthStore((state) => state.user);
	const navigate = useNavigate();
	const { placeOrder } = useOrderStore();
	const {
		cart,
		loading,
		error,
		removeFromCart,
		clearCart,
		increaseQuantity,
		decreaseQuantity,
	} = useCartStore();

	const handlePlaceOrder = () => {
		placeOrder(user, cart);
	};

	const handleIncreaseQuantity = (itemId) => {
		increaseQuantity(itemId);
		navigate("/cart");
	};

	const handleDecreaseQuantity = (itemId) => {
		decreaseQuantity(itemId);
		navigate("/cart");
	};

	const handleClearCart = () => {
		clearCart();
		navigate("/cart");
	};

	const handleRemoveFromCart = (itemId) => {
		removeFromCart(itemId);
		navigate("/cart");
	};

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

	if (cart.items.length === 0) {
		return <EmptyCart />;
	}

	return (
		<Container className="py-5">
			<Row>
				<Col className="d-flex justify-content-between align-items-center">
					<h1 className="text-center mb-4">Shopping Cart</h1>
					{cart.items.length > 0 && (
						<Button variant="danger" onClick={handleClearCart}>
							Clear Cart
						</Button>
					)}
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
									<th>Image</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Total</th>
									<th>Remove</th>
								</tr>
							</thead>
							<tbody>
								{cart.items.map((item) => (
									<tr key={item.id}>
										<td className="align-middle">
											{item.item_data?.name || item.item_data?.title}
										</td>
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
												<Button
													variant="outline-secondary"
													size="sm"
													onClick={() => handleDecreaseQuantity(item.id)}
												>
													-
												</Button>
												<span className="mx-2">{item.quantity}</span>
												<Button
													variant="outline-secondary"
													size="sm"
													onClick={() => handleIncreaseQuantity(item.id)}
												>
													+
												</Button>
											</div>
										</td>
										<td className="align-middle">
											₦<Numeral value={item.subtotal} format={"0,0"} />
										</td>
										<td className="align-middle">
											<i
												class="bi bi-trash text-danger"
												style={{ fontSize: "20px", cursor: "pointer" }}
												onClick={() => handleRemoveFromCart(item.id)}
											></i>
										</td>
									</tr>
								))}
								<tr>
									<td colSpan="5" className="text-end">
										<h4>Total:</h4>
									</td>
									<td>
										₦<Numeral value={cart.total_cart} format={"0,0"} />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			)}
			<Row className="mt-4">
				<Col className="text-center">
					<Button variant="primary" size="lg" onClick={handlePlaceOrder}>
						Proceed to Checkout
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Cart;
