import { create } from "zustand";
import axios from "axios";
import useAuthStore from "./authStore";
import { toast } from "react-toastify";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const useCartStore = create((set, get) => ({
	cart: null,
	loading: false,
	error: null,
	total_cart: 0,

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
	addToCart: async (contentType, objectId) => {
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
				`${VITE_API_URL}/carts/${cart.id}/items/add_item/`,
				{
					content_type: contentType,
					object_id: objectId,
					quantity: 1,
					cart: cart.id,
				},
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
			toast.success("Item added to cart successfully");
		} catch (error) {
			set({
				error: error.response?.data || "Failed to add item",
				loading: false,
			});
			toast.error("Failed to add item");
		}

		get().fetchCart();
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
			toast.success("Item removed from cart successfully");
		} catch (error) {
			set({
				error: error.response?.data || "Failed to remove item",
				loading: false,
			});
			toast.error("Failed to remove item");
		}
		get().fetchCart();
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
			toast.success("Cart cleared successfully");

			set({ cart: null, loading: false });
		} catch (error) {
			set({
				error: error.response?.data || "Failed to clear cart",
				loading: false,
			});
			toast.error("Failed to clear cart");
		}
		get().fetchCart();
	},

	increaseQuantity: async (itemId) => {
		const { isAuthenticated, accessToken } = useAuthStore.getState();
		const { cart } = get();

		if (!isAuthenticated) {
			set({ error: "Please log in to increase quantity." });
			return;
		}

		if (!cart) {
			set({ error: "Cart not found" });
			return;
		}

		set({ loading: true });
		try {
			await axios.post(
				`${VITE_API_URL}/carts/${cart.id}/items/${itemId}/increase_quantity/`,
				{},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);

			set((state) => ({
				cart: {
					...state.cart,
					items: state.cart.items.map((item) =>
						item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
					),
				},
				loading: false,
			}));
			toast.success("Quantity increased successfully");
		} catch (error) {
			set({
				error: error.response?.data || "Failed to increase quantity",
				loading: false,
			});
			toast.error("Failed to increase quantity");
		}
		get().fetchCart();
	},

	decreaseQuantity: async (itemId) => {
		const { isAuthenticated, accessToken } = useAuthStore.getState();
		const { cart } = get();

		if (!isAuthenticated) {
			set({ error: "Please log in to decrease quantity." });
			return;
		}

		if (!cart) {
			set({ error: "Cart not found" });
			return;
		}

		set({ loading: true });
		try {
			await axios.post(
				`${VITE_API_URL}/carts/${cart.id}/items/${itemId}/decrease_quantity/`,
				{},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);

			set((state) => ({
				cart: {
					...state.cart,
					items: state.cart.items
						.map((item) =>
							item.id === itemId
								? { ...item, quantity: item.quantity - 1 }
								: item
						)
						.filter((item) => item.quantity > 0),
				},
				loading: false,
			}));
			toast.success("Quantity decreased successfully");
		} catch (error) {
			set({
				error: error.response?.data || "Failed to decrease quantity",
				loading: false,
			});
			toast.error("Failed to decrease quantity");
		}
		get().fetchCart();
	},
}));

export default useCartStore;
