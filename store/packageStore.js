import { create } from "zustand";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const usePackageStore = create((set) => ({
	packages: [],
	Loading: false,
	error: null,
	gift: null,
	fetchPackages: async () => {
		set((state) => ({ ...state, Loading: true, error: null }));
		try {
			const response = await axios.get(`${VITE_API_URL}/packages/`);
			set((state) => ({ ...state, packages: response.data, Loading: false }));
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
