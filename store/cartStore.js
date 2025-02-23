import { create } from "zustand";
import axios from "axios";
import useAuthStore from "./authStore";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const useCartStore = create((set, get) => ({
	cart: null,
	loading: false,
	error: null,

	// Fetch or Create Cart (Only if authenticated)
	fetchCart: async () => {
		const { isAuthenticated, accessToken } = useAuthStore.getState();
		if (!isAuthenticated) {
			set({ error: "Please log in to view your cart." });
			return;
		}

		set({ loading: true, error: null });
		try {
			const response = await axios.get(`${VITE_API_URL}/carts/get_user_cart/`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			set({ cart: response.data, loading: false });
		} catch (error) {
			set({
				error: error.response?.data || "Failed to load cart",
				loading: false,
			});
		}
	},

	// Add item to cart (Product or Package)
	addToCart: async (contentType, objectId, quantity) => {
		const { isAuthenticated, accessToken } = useAuthStore.getState();
		const { cart } = get();

		if (!isAuthenticated) {
			set({ error: "Please log in to add items to your cart." });
			return;
		}

		if (!cart) {
			set({ error: "Cart not found" });
			return;
		}

		set({ loading: true });

		try {
			const response = await axios.post(
				`${VITE_API_URL}/carts/${cart.id}/items/`,
				{ content_type: contentType, object_id: objectId, quantity },
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);

			set((state) => ({
				cart: { ...state.cart, items: [...state.cart.items, response.data] },
				loading: false,
			}));
		} catch (error) {
			set({
				error: error.response?.data || "Failed to add item",
				loading: false,
			});
		}
	},

	// Remove item from cart (Only if authenticated)
	removeFromCart: async (itemId) => {
		const { isAuthenticated, accessToken } = useAuthStore.getState();
		const { cart } = get();

		if (!isAuthenticated) {
			set({ error: "Please log in to remove items from your cart." });
			return;
		}

		if (!cart) {
			set({ error: "Cart not found" });
			return;
		}

		set({ loading: true });
		try {
			await axios.delete(`${VITE_API_URL}/carts/${cart.id}/items/${itemId}/`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			set((state) => ({
				cart: {
					...state.cart,
					items: state.cart.items.filter((item) => item.id !== itemId),
				},
				loading: false,
			}));
		} catch (error) {
			set({
				error: error.response?.data || "Failed to remove item",
				loading: false,
			});
		}
	},

	// Clear entire cart
	clearCart: async () => {
		const { isAuthenticated, accessToken } = useAuthStore.getState();
		const { cart } = get();

		if (!isAuthenticated) {
			set({ error: "Please log in to clear your cart." });
			return;
		}

		if (!cart) {
			set({ error: "Cart not found" });
			return;
		}

		set({ loading: true });
		try {
			await axios.delete(`${VITE_API_URL}/carts/${cart.id}/clear/`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

			set({ cart: null, loading: false });
		} catch (error) {
			set({
				error: error.response?.data || "Failed to clear cart",
				loading: false,
			});
		}
	},
}));

export default useCartStore;
