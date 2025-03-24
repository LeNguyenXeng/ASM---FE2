import { ADD_TO_CART } from "./action.js";
import { DELETE_PRODUCT } from "./action.js";
import { CLEAR_CART } from "./action.js";
const initialState = {
  cartItem: [],
};

const cartReducer = (state = initialState, action) => {
  const { cartItem } = state;

  // Khai báo biến ngoài switch
  let existingItem;
  switch (action.type) {
    case ADD_TO_CART:
      existingItem = cartItem.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          cartItem: cartItem.map((item) =>
            item.id === existingItem.id
              ? {
                  ...item,
                  quantity: action.updateFromCart
                    ? action.payload.quantity
                    : item.quantity + (action.payload.quantity || 1),
                }
              : item
          ),
        };
      }

      return {
        ...state,
        cartItem: [
          ...cartItem,
          { ...action.payload, quantity: action.payload.quantity || 1 },
        ],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        cartItem: cartItem.filter((item) => item.id !== action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItem: [], 
      };

    default:
      return state;
  }
};

export default cartReducer;
