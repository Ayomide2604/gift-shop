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
		const { isAuthenticated, accessToken } = useAuthStore.getState();
		if (!isAuthenticated) {
			set({ error: "Please log in to view your orders." });
			toast.error("Please log in to view your orders.");
			return;
		}
		set({ loading: true, error: null });
		try {
			const response = await axios.get(`${VITE_API_URL}/orders/${orderId}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			set({ order: response.data, loading: false });
		} catch (error) {
			set({ error: error.message, loading: false });
			toast.error("Error fetching order.");
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
				window.location.href = "/checkout";
			}, 2000);
		} catch (error) {
			set({ error: error.message, loading: false });
			toast.error("Error placing order.");
		}
	},

	initializePayment: async (orderId) => {
		const { isAuthenticated, accessToken } = useAuthStore.getState();
		if (!isAuthenticated) {
			set({ error: "Please log in to make a payment." });
			toast.error("Please log in to make a payment.");
			return;
		}
		try {
			const response = await axios.post(
				`${VITE_API_URL}/orders/${orderId}/initialize_payment/`,
				{},
				{
					headers: { Authorization: `Bearer ${accessToken}` },
				}
			);

			if (response.data.checkout_url) {
				window.location.href = response.data.checkout_url;
			}
		} catch (error) {
			toast.error("Payment initialization failed.");
			console.error("Payment initialization failed:", error);
		}
	},

	verifyPayment: async (reference) => {
		const { isAuthenticated, accessToken } = useAuthStore.getState();
		if (!isAuthenticated) {
			set({ error: "Please log in to verify your payment." });
			toast.error("Please log in to verify your payment.");
			return;
		}
		try {
			const response = await axios.get(
				`${VITE_API_URL}/orders/verify_payment/?reference=${reference}`,
				{
					headers: { Authorization: `Bearer ${accessToken}` },
				}
			);

			toast.success("Payment Successful!");

			const orderId = response.data.order_id; // Assume backend returns order ID
			set((state) => ({
				orders: state.orders.map((order) =>
					order.reference === reference
						? { ...order, payment_status: "successful" }
						: order
				),
			}));

			return orderId; // Return order ID to redirect user to order detail page
		} catch (error) {
			toast.error("Payment verification failed.");
			console.error(error);
			return null;
		}
	},
}));

export default useOrderStore;
