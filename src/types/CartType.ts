import {ProductCartType} from './ProductType';

export interface CartType {
  cartList: Array<ProductCartType>;
  cartTotalQuantity: number;
}
