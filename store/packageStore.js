import { create } from "zustand";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const usePackageStore = create((set) => ({
	packages: [],
	totalPackages: 0,
	nextPage: null,
	previousPage: null,
	currentPage: localStorage.getItem("packagePage")
		? parseInt(localStorage.getItem("packagePage"), 10)
		: 1,
	pageSize: 12,
	Loading: false,
	error: null,
	gift: null,

	setCurrentPage: (page) => {
		localStorage.setItem("packagePage", page);
		set({ currentPage: page });
	},

	fetchPackages: async (page = 1) => {
		set((state) => ({ ...state, Loading: true, error: null }));
		try {
			const response = await axios.get(
				`${VITE_API_URL}/packages/?page=${page}`
			);
			set((state) => ({
				...state,
				packages: response.data.results,
				totalPackages: response.data.count,
				nextPage: response.data.next,
				previousPage: response.data.previous,
				currentPage: page,
				Loading: false,
			}));
			localStorage.setItem("packagePage", page);
		} catch (error) {
			set((state) => ({ ...state, error: error.message, Loading: false }));
		}
	},

	fetchPackageById: async (id) => {
		set((state) => ({ ...state, Loading: true, error: null }));
		try {
			const response = await axios.get(`${VITE_API_URL}/packages/${id}/`);
			set((state) => ({ ...state, gift: response.data, Loading: false }));
		} catch (error) {
			set((state) => ({ ...state, error: error.message, Loading: false }));
		}
	},
}));

export default usePackageStore;
