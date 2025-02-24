import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { RiFileListLine } from "react-icons/ri";
import { RiSettingsLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";
import { RiWalletLine } from "react-icons/ri";
import { RiNotificationLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import AddressList from "../shipping/AddressList";
import OrderList from "../orders/OrderList";
const Dashboard = () => {
	return (
		<Container fluid className="dashboard-container">
			<Row>
				<Col lg={12} sm={12} md={12} className="text-center mt-5 pt-3">
					<h2>Welcome to the Dashboard</h2>
				</Col>
			</Row>

			<Row>
				<div className="pb-5">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="rounded-4 border  bg-white mb-4">
									<div className="text-center p-5 border-bottom">
										<img
											src="https://img.freepik.com/free-photo/i-know-exactly-what-i-want-headshot-attractive-young-african-american-student-stylish-glasses-having-serious-calm-face-expression-feeling-confident-about-his-future-plans-career_273609-179.jpg?uid=R187989283&ga=GA1.1.683011030.1739465736&semt=ais_hybrid"
											alt="customer"
											className="img-fluid rounded-circle  mb-4"
										/>
										<h3 className="fw-bold mb-1">User Name</h3>
										<p className="m-0 text-muted">user@gmail.com</p>
									</div>
									<div className="p-4">
										<Link className="dropdown-item active" to="/dashboard">
											<RiFileListLine /> Orders
										</Link>
										<Link className="dropdown-item" to="account-settings.html">
											<RiSettingsLine /> Settings
										</Link>
										<Link className="dropdown-item" to="/dashboard/address">
											<RiMapPinLine /> Address
										</Link>

										<Link className="dropdown-item" to="../index.html">
											<RiLogoutCircleLine /> Logout
										</Link>
									</div>
								</div>
							</div>

							<Routes>
								<Route index element={<OrderList />} />
								{/* <Route path="/settings" element={<Settings />} /> */}
								<Route path="/address" element={<AddressList />} />
							</Routes>
						</div>
					</div>
				</div>
			</Row>
		</Container>
	);
};

export default Dashboard;
