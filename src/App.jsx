import "./App.css";
import "./components/partials/partials.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import CategoryList from "./components/categories/CategoryList";
import CategoryDetail from "./components/categories/CategoryDetail";
import PackageList from "./components/packages/PackageList";
import PackageDetail from "./components/packages/PackageDetail";
import Dashboard from "./components/dashboard/Dashboard";
import Cart from "./components/cart/Cart";

import { useEffect, useState } from "react";
import { getCategories, getPackages } from "./../api/apiServices";

function App() {
	const [categories, setCategories] = useState([]);
	const [packages, setPackages] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const categories = await getCategories();
				setCategories(categories);
			} catch (error) {
				setError(error);
				console.error("Error fetching categories:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchCategories();
	}, []);

	useEffect(() => {
		const fetchPackages = async () => {
			const packages = await getPackages();
			setPackages(packages);
		};
		fetchPackages();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="app-container pt-5">
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home categories={categories} packages={packages} />}
				/>
				<Route
					path="/categories"
					element={<CategoryList categories={categories} />}
				/>
				<Route path="/categories/:id" element={<CategoryDetail />} />
				<Route path="/packages" element={<PackageList packages={packages} />} />
				<Route path="/packages/:id" element={<PackageDetail />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
