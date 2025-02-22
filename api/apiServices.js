import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const fetchCategories = async () => {
	const response = await axios.get(`${VITE_API_URL}/categories/`);
	return response.data;
};
