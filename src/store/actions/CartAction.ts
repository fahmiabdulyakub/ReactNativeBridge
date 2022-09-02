import {ActionTypes} from 'constants/index';
import {Dispatch} from 'redux';
import {ProductType} from 'types/ProductType';

export const addToCart = (data: ProductType) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.ADD_TO_CART,
    payload: data,
  });
};

export const incrementQty = (data: ProductType) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.INCREMENT_QUANTITY,
    payload: data,
  });
};

export const decrementQty = (data: ProductType) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.DECREMENT_QUANTITY,
    payload: data,
  });
};

export const removeItemCart = (data: ProductType) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.REMOVE_ITEM_CART,
    payload: data,
  });
};
