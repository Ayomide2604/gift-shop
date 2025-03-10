import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<StrictMode>
			<ToastContainer position="top-right" autoClose={3000} />
			<App />
		</StrictMode>
	</BrowserRouter>
);
