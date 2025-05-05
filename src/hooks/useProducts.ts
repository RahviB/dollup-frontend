// /src/hooks/useProducts.ts
import { useEffect, useState } from 'react';
import { getProducts } from '@/lib/woo/products';
import { Product } from '@/types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getProducts();
        setProducts(res);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return { products, loading };
};
