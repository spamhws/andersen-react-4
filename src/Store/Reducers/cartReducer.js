const dataReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': {
      let itemAlreadyAdded = false;
      const newCart = [...state.items];
      state.items.forEach((item, index) => {
        if (item.id === action.payload.id) {
          newCart[index].amount += Number(action.payload.amount);
          itemAlreadyAdded = true;
        }
      });
      if (!itemAlreadyAdded) {
        newCart.push(action.payload);
      }
      return { items: newCart };
    }
    case 'REMOVE_ITEM': {
      const newCart = [...state.items].filter((item) => item.id !== action.payload);

      return { items: newCart };
    }
    case 'EMPTY_CART': {
      return { items: [] };
    }

    default:
      return state;
  }
};

export default dataReducer;
