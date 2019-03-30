export const addToCart = (id) => {
    return {type: 'addToCart', id};
  }

export const delAllItemToCart = (id) => {
    return {type: 'delAllItemToCart', id};
  }

export const delOneItemToCart = (id) => {
    return {type: 'delOneItemToCart', id};
  }

export const refreshCart = () => {
    return {type: 'refreshCart'};
  }