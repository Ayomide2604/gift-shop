import { create } from "zustand";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

//  Create Zustand Store
const useAuthStore = create((set) => ({
	user: null,
	token: localStorage.getItem("token") || null,
	refreshToken: localStorage.getItem("refreshToken") || null,

	login: async ({ email, password }) => {
		try {
			const response = await axios.post(`${VITE_API_URL}/auth/jwt/create/`, {
				email,
				password,
			});

			const accessToken = response.data.access;
			const refreshToken = response.data.refresh;

			// Store tokens in localStorage
			localStorage.setItem("token", accessToken);
			localStorage.setItem("refreshToken", refreshToken);
			axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

			//  Fetch user profile
			set({ token: accessToken });
			await useAuthStore.getState().fetchUserProfile();
		} catch (error) {
			console.error("Login failed:", error);
			throw error.response?.data || "Invalid credentials";
		}
	},

	fetchUserProfile: async () => {
		try {
			const response = await axios.get(`${VITE_API_URL}/auth/users/me/`);
			set({ user: response.data });
			localStorage.setItem("user", JSON.stringify(response.data));
		} catch (error) {
			console.error("Failed to fetch user profile:", error);
			useAuthStore.getState().logout();
		}
	},

	logout: () => {
		localStorage.removeItem("token");
		localStorage.removeItem("refreshToken");
		localStorage.removeItem("user");
		delete axios.defaults.headers.common["Authorization"];

		set({ user: null, token: null, refreshToken: null });
		window.location.href = "/login";
	},

	initializeAuth: async () => {
		const token = localStorage.getItem("token");
		if (token) {
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await useAuthStore.getState().fetchUserProfile();
		}
	},
}));

useAuthStore.getState().initializeAuth();

export default useAuthStore;
