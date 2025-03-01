import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Navigate, Routes, Route } from "react-router-dom";
import {
	RiFileListLine,
	RiSettingsLine,
	RiMapPinLine,
	RiLogoutCircleLine,
	RiAccountCircleLine,
} from "react-icons/ri";
import AddressList from "../shipping/AddressList";
import OrderList from "../orders/OrderList";
import OrderDetail from "../orders/OrderDetail";
import useAuthStore from "./../../../store/authStore";
import "./dashboard.css";
import Profile from "./Profile";

const Dashboard = () => {
	const user = useAuthStore((state) => state.user);
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
	const logout = useAuthStore((state) => state.logout);

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	console.log(user);

	return (
		<Container fluid className="dashboard-container">
			<Row className="mt-5">
				<Col lg={4} className="sidebar">
					<div className="user-info rounded-4 border bg-white mb-4">
						<div className="text-center p-5 border-bottom">
							<img
								src={user?.profile?.profile_picture_url || "/avatar.png"}
								alt="customer"
								className="img-fluid rounded-circle mb-4"
								style={{ width: "150px", height: "150px", objectFit: "cover" }}
							/>
							<h3 className="fw-bold mb-1">
								{user?.profile?.first_name} {user?.profile?.last_name}
							</h3>
							<p className="m-0 text-muted">{user?.email}</p>
						</div>
						<div className="p-4">
							<Link className="dropdown-item active" to="/dashboard">
								<RiAccountCircleLine /> Profile
							</Link>
							<Link className="dropdown-item active" to="/dashboard/orders">
								<RiFileListLine /> Orders
							</Link>
							<Link className="dropdown-item" to="#">
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
						<Route index element={<Profile />} />
						<Route path="/orders" element={<OrderList />} />
						<Route path="/orders/:orderId" element={<OrderDetail />} />
						<Route path="/address" element={<AddressList />} />
					</Routes>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
