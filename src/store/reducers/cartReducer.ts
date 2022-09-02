import {ActionTypes} from 'constants/index';
import initialstate from 'store/initialState';
import {CartType} from 'types/CartType';
import {ProductType} from 'types/ProductType';

type Action = {
  type: string;
  payload: ProductType;
};

export default function cartReducer(
  state: CartType = initialstate.cart,
  action: Action,
) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      state.cartTotalQuantity += 1;
      const tempProduct = {...action.payload, quantity: 1};
      return {
        ...state,
        cartList: state.cartList.concat(tempProduct),
      };
    case ActionTypes.INCREMENT_QUANTITY:
      state.cartTotalQuantity += 1;
      return {
        ...state,
        cartList: state.cartList.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      };
    case ActionTypes.DECREMENT_QUANTITY:
      state.cartTotalQuantity -= 1;
      return {
        ...state,
        cartList: state.cartList.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        ),
      };
    case ActionTypes.REMOVE_ITEM_CART:
      state.cartTotalQuantity -= 1;
      return {
        ...state,
        cartList: state.cartList.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}
