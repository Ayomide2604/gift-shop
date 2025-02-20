import "./App.css";
import "./components/partials/partials.css";
import { Routes, Route } from "react-router";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Home from "./components/home/Home";
import Categories from "./components/categories/Categories";
import Packages from "./components/packages/Packages";
import Contact from "./components/contact/Contact";
import Login from "./components/auth/Login";
function App() {
	return (
		<div className="app-container pt-5">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/packages" element={<Packages />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
