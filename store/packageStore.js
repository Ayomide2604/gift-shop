import { create } from "zustand";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const usePackageStore = create((set) => ({
	packages: [],
	Loading: false,
	error: null,

	fetchPackages: async () => {
		set({ Loading: true, error: null });
		try {
			const response = await axios.get(`${VITE_API_URL}/packages/`);
			set({ packages: response.data, Loading: false });
		} catch (error) {
			set({ error: error.message, Loading: false });
		}
	},
}));

export default usePackageStore;
