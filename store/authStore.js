import { create } from "zustand";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const useAuthStore = create((set) => ({
	user: JSON.parse(localStorage.getItem("user")) || null,
	accessToken: localStorage.getItem("access") || null,
	refreshToken: localStorage.getItem("refresh") || null,
	isAuthenticated: !!localStorage.getItem("access"),

	// Login function
	login: async (email, password) => {
		try {
			const response = await axios.post(`${VITE_API_URL}/auth/jwt/create/`, {
				email,
				password,
			});

			const { access, refresh } = response.data;

			// Save tokens in local storage
			localStorage.setItem("access", access);
			localStorage.setItem("refresh", refresh);

			await new Promise((resolve) => setTimeout(resolve, 500));

			// Fetch user details
			const userResponse = await axios.get(`${VITE_API_URL}/auth/users/me/`, {
				headers: {
					Authorization: `Bearer ${access}`,
				},
			});

			// Save user details
			localStorage.setItem("user", JSON.stringify(userResponse.data));

			set({
				user: userResponse.data,
				accessToken: access,
				refreshToken: refresh,
				isAuthenticated: true,
			});

			return true;
		} catch (error) {
			console.error("Login failed:", error.response?.data || error.message);
			return false;
		}
	},

	// Signup function
	signup: async (username, email, password, first_name, last_name) => {
		try {
			await axios.post(`${VITE_API_URL}/auth/users/`, {
				username,
				email,
				password,
				first_name,
				last_name,
			});
		} catch (error) {
			console.error("Signup failed:", error.response?.data || error.message);
		}
	},

	// Logout function
	logout: () => {
		localStorage.removeItem("access");
		localStorage.removeItem("refresh");
		localStorage.removeItem("user");
		window.location.href = "/login";

		set({
			user: null,
			accessToken: null,
			refreshToken: null,
			isAuthenticated: false,
		});
	},
}));

export default useAuthStore;
