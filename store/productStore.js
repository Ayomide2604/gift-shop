import { create } from "zustand";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const useProductStore = create((set) => ({
	products: [],
	product: null,
	Loading: false,
	error: null,

	fetchProducts: async () => {
		set((state) => ({ ...state, Loading: true, error: null }));
		try {
			const response = await axios.get(`${VITE_API_URL}/products/`);
			set((state) => ({
				...state,
				products: response.data.results,
				Loading: false,
			}));
		} catch (error) {
			set((state) => ({ ...state, error: error.message, Loading: false }));
		}
	},

	fetchProductById: async (id) => {
		set((state) => ({ ...state, Loading: true, error: null }));
		try {
			const response = await axios.get(`${VITE_API_URL}/products/${id}/`);
			set((state) => ({ ...state, product: response.data, Loading: false }));
		} catch (error) {
			set((state) => ({ ...state, error: error.message, Loading: false }));
		}
	},
}));

export default useProductStore;
