import { create } from "zustand";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const useProductStore = create((set) => ({
	products: [],
	totalProducts: 0,
	nextPage: null,
	previousPage: null,
	product: null,
	Loading: false,
	error: null,

	fetchProducts: async (page = 1) => {
		set((state) => ({ ...state, Loading: true, error: null }));
		try {
			const response = await axios.get(
				`${VITE_API_URL}/products/?page=${page}`
			);
			set((state) => ({
				...state,
				products: response.data.results,
				totalProducts: response.data.count,
				nextPage: response.data.next,
				previousPage: response.data.previous,
				currentPage: page,
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
