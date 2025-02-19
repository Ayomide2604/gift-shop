import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Home from "./components/home/Home";
function App() {
	return (
		<div className="app-container pt-5">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
