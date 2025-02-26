import { create } from "zustand";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const useCategoryStore = create((set) => ({
	categories: [],
	category: null,
	totalCategories: 0,
	nextPage: null,
	previousPage: null,
	currentPage: 1,
	pageSize: 2,
	Loading: false,
	error: null,

	setCurrentPage: (page) => {
		set({ currentPage: page });
	},

	fetchCategories: async (page = 1) => {
		set((state) => ({ ...state, Loading: true, error: null }));
		try {
			const response = await axios.get(
				`${VITE_API_URL}/categories/?page=${page}`
			);
			set((state) => ({
				...state,
				categories: response.data.results,
				totalCategories: response.data.count,
				nextPage: response.data.next,
				previousPage: response.data.previous,
				currentPage: page,
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
