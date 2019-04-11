import {actionTypes} from './action-type';

export const addToCart = (id, operation) => {
    return {type: actionTypes.ADD_TO_CART, id, operation};
  }

export const delAllItemToCart = (id) => {
    return {type: actionTypes.DELETE_ALL_ITEM_IN_CART, id};
  }

export const refreshCart = () => {
    return {type: actionTypes.REFRESH_CART};
  }