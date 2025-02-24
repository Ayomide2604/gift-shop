import { create } from "zustand";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const useCategoryStore = create((set) => ({
	categories: [],
	category: null,
	Loading: false,
	error: null,

	fetchCategories: async () => {
		set((state) => ({ ...state, Loading: true, error: null }));
		try {
			const response = await axios.get(`${VITE_API_URL}/categories/`);
			set((state) => ({
				...state,
				categories: response.data.results,
				Loading: false,
			}));
		} catch (error) {
			set((state) => ({ ...state, error: error.message, Loading: false }));
		}
	},

	fetchCategoryById: async (id) => {
		set((state) => ({ ...state, Loading: true, error: null }));
		try {
			const response = await axios.get(`${VITE_API_URL}/categories/${id}/`);
			set((state) => ({ ...state, category: response.data, Loading: false }));
		} catch (error) {
			set((state) => ({ ...state, error: error.message, Loading: false }));
		}
	},
}));

export default useCategoryStore;
