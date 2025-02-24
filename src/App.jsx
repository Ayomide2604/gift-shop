import "./App.css";
import "./components/partials/partials.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import CategoryList from "./components/categories/CategoryList";
import CategoryDetail from "./components/categories/CategoryDetail";
import PackageList from "./components/packages/PackageList";
import PackageDetail from "./components/packages/PackageDetail";
import ProductList from "./components/products/ProductList";
import ProductDetail from "./components/products/ProductDetail";
import Dashboard from "./components/dashboard/Dashboard";
import Cart from "./components/cart/Cart";
import PageNotFound from "./components/partials/PageNotFound";
import ProtectedRoute from './../store/ProtectedRoutes';

function App() {
	return (
		<div className="app-container pt-5">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/categories" element={<CategoryList />} />
				<Route path="/categories/:id" element={<CategoryDetail />} />
				<Route path="/packages" element={<PackageList />} />
				<Route path="/packages/:id" element={<PackageDetail />} />
				<Route path="/products" element={<ProductList />} />
				<Route path="/products/:id" element={<ProductDetail />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<PageNotFound />} />

				{/* Protected Routes */}
				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard*" element={<Dashboard />} />
					<Route path="/cart" element={<Cart />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
