export const addItemToCart = (product) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: product,
  };
};

export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: id,
  };
};

export const emptyCart = () => {
  return {
    type: 'EMPTY_CART',
  };
};
