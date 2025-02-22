import { create } from "zustand";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const useCategoryStore = create((set) => ({
	categories: [],
	Loading: false,
	error: null,

	fetchCategories: async () => {
		set({ Loading: true, error: null });
		try {
			const response = await axios.get(`${VITE_API_URL}/categories/`);
			set({ categories: response.data, Loading: false });
		} catch (error) {
			set({ error: error.message, Loading: false });
		}
	},
}));

export default useCategoryStore;
