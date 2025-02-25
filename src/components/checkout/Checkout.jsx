import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import useOrderStore from "../../../store/orderStore";
import { useEffect, useState } from "react";
import Numeral from "react-numeral";
const Checkout = () => {
	const { orderId } = useParams();
	const { order, loading, error, fetchOrderById, initializePayment } =
		useOrderStore();

	const [countries, setCountries] = useState([]);
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);

	const [selectedCountry, setSelectedCountry] = useState("");
	const [selectedState, setSelectedState] = useState("");

	useEffect(() => {
		axios
			.get("https://countriesnow.space/api/v0.1/countries")
			.then((res) => setCountries(res.data.data))
			.catch((err) => console.log(err));
	}, []);

	// Fetch states when a country is selected
	const handleCountryChange = (e) => {
		const country = e.target.value;
		setSelectedCountry(country);
		setSelectedState("");
		setCities([]);

		axios
			.post("https://countriesnow.space/api/v0.1/countries/states", {
				country,
			})
			.then((res) => setStates(res.data.data.states))
			.catch((err) => console.log(err));
	};

	// Fetch cities when a state is selected
	const handleStateChange = (e) => {
		const state = e.target.value;
		setSelectedState(state);

		axios
			.post("https://countriesnow.space/api/v0.1/countries/state/cities", {
				country: selectedCountry,
				state,
			})
			.then((res) => setCities(res.data.data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchOrderById(orderId);
	}, [orderId]);

	return (
		<div className="my-5 p-3">
			<Container>
				<Row className="g-4">
					{/* Billing Details */}
					<Col lg={6} xs={12} className="mb-5">
						<h3 className="fw-bold">Bill details</h3>
						<Form>
							<Row className="g-3">
								<Col md={6}>
									<Form.Label className="small text-muted">
										First Name
									</Form.Label>
									<Form.Control type="text" />
								</Col>
								<Col md={6}>
									<Form.Label className="small text-muted">
										Last Name
									</Form.Label>
									<Form.Control type="text" />
								</Col>
								<Col xs={12}>
									<Form.Label className="small text-muted">
										Company name (optional)
									</Form.Label>
									<Form.Control type="text" />
								</Col>
								<Col xs={12}>
									<Form.Label className="small text-muted">
										Country / Region
									</Form.Label>
									<Form.Select
										onChange={handleCountryChange}
										className="p-2 border rounded"
									>
										<option value="">Select Country</option>
										{countries.map((country, idx) => (
											<option key={idx} value={country.country}>
												{country.country}
											</option>
										))}
									</Form.Select>
								</Col>
								<Col xs={12}>
									<Form.Label className="small text-muted">State</Form.Label>
									<Form.Select
										onChange={handleStateChange}
										className="p-2 border rounded"
										disabled={!selectedCountry}
									>
										<option value="">Select State</option>
										{states.map((state, idx) => (
											<option key={idx} value={state.name}>
												{state.name}
											</option>
										))}
									</Form.Select>
								</Col>
								<Col xs={12}>
									<Form.Label className="small text-muted">
										Town / City
									</Form.Label>
									<Form.Control type="text" />
								</Col>

								<Col xs={12}>
									<Form.Label className="small text-muted">
										Street address
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="House no and street name"
										className="mb-3"
									/>
									<Form.Control
										type="text"
										placeholder="Apartment, suite, unit, etc"
									/>
								</Col>

								<Col xs={12}>
									<Form.Label className="small text-muted">Phone</Form.Label>
									<Form.Control type="text" />
								</Col>
								<Col xs={12}>
									<Form.Label className="small text-muted">Email</Form.Label>
									<Form.Control type="email" />
								</Col>
								<h5 className="fw-bold pt-3 mb-0">Additional information</h5>
								<Col xs={12}>
									<Form.Label className="small text-muted">
										Order notes (optional)
									</Form.Label>
									<Form.Control
										as="textarea"
										rows={5}
										placeholder="Note about your order"
									/>
								</Col>
							</Row>
						</Form>
					</Col>

					{/* Order Summary */}
					<Col lg={6} xs={12} className="ps-lg-5">
						<div className="">
							<Card className="border p-5 rounded-4">
								<h5 className="fw-bold pb-2">Your order #</h5>
								<div className="d-flex justify-content-between border-bottom py-3">
									<h6 className="fw-bold mb-0">Product</h6>
									<h6 className="fw-bold mb-0">Subtotal</h6>
								</div>

								{order?.items?.map((item) => (
									<div className="d-flex justify-content-between align-items-center border-bottom py-3">
										<img
											src={item.item_data?.image_url}
											alt={item.item_data?.name || item.item_data?.title}
											className="img-fluid"
											style={{ width: "50px", height: "50px" }}
										/>
										<h6 className="mb-0 ">
											{item.item_data?.name || item.item_data?.title} ×{" "}
											{item.quantity}
										</h6>
										<p className="mb-0 ">
											₦
											<Numeral value={item.subtotal} format={"0,0"} />
										</p>
									</div>
								))}

								<div className="d-flex justify-content-between py-3">
									<h5 className="fw-bold mb-0 text-primary">Total</h5>
									<p className="fw-bold mb-0 h5 text-primary">
										₦
										<Numeral value={order?.total_price} format={"0,0"} />
									</p>
								</div>

								<Button
									variant="primary"
									className="w-100 py-3"
									onClick={() => initializePayment(orderId)}
								>
									Pay with Paystack
								</Button>
							</Card>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Checkout;
