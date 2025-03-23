export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addToCart = (product, updateFromCart = false) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
    updateFromCart,
  };
};

export const deleteProductId = (productId) => {
  return {
    type: "DELETE_PRODUCT",
    payload: productId,
  };
};
