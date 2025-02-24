import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Navigate, Routes, Route } from "react-router-dom";
import {
	RiFileListLine,
	RiSettingsLine,
	RiMapPinLine,
	RiLogoutCircleLine,
} from "react-icons/ri";
import AddressList from "../shipping/AddressList";
import OrderList from "../orders/OrderList";
import OrderDetail from "../orders/OrderDetail";
import useAuthStore from "./../../../store/authStore";
import "./dashboard.css"; 

const Dashboard = () => {
	const user = useAuthStore((state) => state.user);
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
	const logout = useAuthStore((state) => state.logout);

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	return (
		<Container fluid className="dashboard-container">
			<Row className="mt-5">
				<Col lg={4} className="sidebar">
					<div className="user-info rounded-4 border bg-white mb-4">
						<div className="text-center p-5 border-bottom">
							<img
								src="https://img.freepik.com/free-photo/i-know-exactly-what-i-want-headshot-attractive-young-african-american-student-stylish-glasses-having-serious-calm-face-expression-feeling-confident-about-his-future-plans-career_273609-179.jpg?uid=R187989283&ga=GA1.1.683011030.1739465736&semt=ais_hybrid"
								alt="customer"
								className="img-fluid rounded-circle mb-4"
							/>
							<h3 className="fw-bold mb-1">{user?.username}</h3>
							<p className="m-0 text-muted">{user?.email}</p>
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
							<Link className="dropdown-item" to="/" onClick={logout}>
								<RiLogoutCircleLine /> Logout
							</Link>
						</div>
					</div>
				</Col>
				<Col lg={8} className="content-area">
					<Routes>
						<Route index element={<OrderList />} />
						<Route path="/orders/:orderId" element={<OrderDetail />} />
						<Route path="/address" element={<AddressList />} />
					</Routes>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
