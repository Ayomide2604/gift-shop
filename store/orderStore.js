import { create } from "zustand";
import axios from "axios";
import useAuthStore from "./authStore";
import { toast } from "react-toastify";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const useOrderStore = create((set) => ({
	orders: [],
	order: null,
	loading: false,
	error: null,

	// Fetch all user orders
	fetchOrders: async () => {
		const { isAuthenticated, accessToken } = useAuthStore.getState();
		if (!isAuthenticated) {
			set({ error: "Please log in to view your orders." });
			toast.error("Please log in to view your orders.");
			return;
		}

		set({ loading: true, error: null });
		try {
			console.log("Access Token:", accessToken);
			const response = await axios.get(`${VITE_API_URL}/orders/`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			set({ orders: response.data, loading: false });
		} catch (error) {
			console.error("Error fetching orders:", error.response || error.message);
			toast.error("Error fetching orders.");
			set({ error: error.message, loading: false });
		}
	},

	// Fetch a single order by ID
	fetchOrderById: async (orderId) => {
		set({ loading: true, error: null });
		try {
			const accessToken = localStorage.getItem("accessToken");
			const response = await axios.get(`${VITE_API_URL}/orders/${orderId}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			set({ order: response.data, loading: false });
		} catch (error) {
			set({ error: error.message, loading: false });
		}
	},

	placeOrder: async (user, cart) => {
		const { isAuthenticated, accessToken } = useAuthStore.getState();
		if (!isAuthenticated) {
			set({ error: "Please log in to place an order." });
			toast.error("Please log in to place an order.");
			return;
		}

		set({ loading: true, error: null });
		try {
			const response = await axios.post(
				`${VITE_API_URL}/orders/place_order/`,
				{ user, cart },
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
			set({ order: response.data, loading: false });
			toast.success("Order placed successfully.");
			setTimeout(() => {
				window.location.href = "/dashboard";
			}, 3000);
		} catch (error) {
			set({ error: error.message, loading: false });
			toast.error("Error placing order.");
		}
	},
}));

export default useOrderStore;
