// /src/types/index.ts

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  images: { src: string; alt?: string }[];
  [key: string]: any;
}
