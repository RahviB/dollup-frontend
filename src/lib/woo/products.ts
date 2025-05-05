// /src/lib/woo/products.ts
import axios from 'axios';

const base = process.env.NEXT_PUBLIC_WC_BASE_URL;
const key = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
const secret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;

const auth = `consumer_key=${key}&consumer_secret=${secret}`;

export const getProducts = async () => {
  const { data } = await axios.get(`${base}/wp-json/wc/v3/products?${auth}`);
  return data;
};

export const getProduct = async (id: string | number) => {
  const { data } = await axios.get(`${base}/wp-json/wc/v3/products/${id}?${auth}`);
  return data;
};
