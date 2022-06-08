import { Banner } from '../models/Banner';
import { Product } from '../models/Product';
import axios from 'axios';

// FIXME: Best way to do this?
// TODO: Remove hardcoded URLs and place in .env file

export const fetchBanners = async (): Promise<Banner[]> => {
	const response = await axios.get('https://mocki.io/v1/f3dc8ed7-6b7e-4b09-bc5e-17375d89557f');
	return response.data.results;
};

export const fetchProducts = async (): Promise<Product[]> => {
	const response = await axios.get('https://mocki.io/v1/6d9a731e-e212-4f11-a26f-0bccd6f5af01');
	return response.data.results;
};
