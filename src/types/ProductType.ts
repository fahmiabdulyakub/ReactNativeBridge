export interface ProductType {
  id: number;
  name: string;
  price: number;
  image_url: string;
  stock: number;
}

export interface ProductCartType {
  id: number;
  name: string;
  price: number;
  image_url: string;
  stock: number;
  quantity: number;
}
