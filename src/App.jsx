import "./App.css";
import "./components/partials/partials.css";
import { Routes, Route } from "react-router";
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
import Cart from "./components/cart/Cart";

import { useEffect, useState } from "react";
import { getCategories } from "./../api/apiServices";

const packages = [
	{
		title: "Package 1",
		price: "₦100,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://mandilax.com/wp-content/uploads/2020/01/11991075086_856659551-1.jpg",
	},
	{
		title: "Package 2",
		price: "₦200,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://m.media-amazon.com/images/I/71ZKWDhv-TL._AC_UF1000,1000_QL80_.jpg",
	},
	{
		title: "Package 3",
		price: "₦300,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://kp-pharma.ams3.digitaloceanspaces.com/J2XRk6e68R5FPP1qgxJKVHAIA9v8ijypOs8mTJYR.jpg",
	},
	{
		title: "Package 4",
		price: "₦400,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image: "https://i.ebayimg.com/images/g/NcUAAOSwvaVi1pCN/s-l1200.png",
	},
	{
		title: "Package 5",
		price: "₦500,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://www.petalsfloristonline.co.uk/upload/mt/pf77/products/Interflora/lg_null-ruby-kisses-anniversary-gift-set.jpg",
	},
	{
		title: "Package 6",
		price: "₦600,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://a-homehousing.org/wp-content/uploads/2020/01/ValentinesSugar_Free_ValSKU_8161332.jpg",
	},
];

function App() {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const categories = await getCategories();
				setCategories(categories);
				console.log(categories);
			} catch (error) {
				setError(error);
				console.error("Error fetching categories:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchCategories();
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
				<Route path="/cart" element={<Cart />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
