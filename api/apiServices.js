import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const getCategories = async () => {
	const response = await axios.get(`${VITE_API_URL}/categories/`);
	return response.data;
};

export const getPackages = async () => {
	const response = await axios.get(`${VITE_API_URL}/packages/`);
	return response.data;
};

export const getGiftPackageById = async (id) => {
	const response = await axios.get(`${VITE_API_URL}/packages/${id}`);
	return response.data;
};
