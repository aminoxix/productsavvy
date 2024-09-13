import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

export async function fetchProducts(data: { limit: number; skip: number }) {
  const response = await axios.get(BASE_URL, {
    params: {
      limit: data.limit,
      skip: data.skip,
    },
  });
  return response.data;
}
