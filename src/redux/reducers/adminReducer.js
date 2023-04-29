const initialState = {};

export default function admin(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return {
        ...state,
        productError: action.error ? action.error : null,
        productSuccess: action.subtype === "success",
        productLoading: action.subtype === "loading",
        productData:
          action.subtype === "success" ? action.productData : state.productData
      };
    }
    case "GET_PRODUCTS": {
      return {
        ...state,
        productError: action.error ? action.error : null,
        productSuccess: action.subtype === "success",
        productLoading: action.subtype === "loading",
        productsData:
          action.subtype === "success" ? action.productsData : state.productsData
      };
    }
    // case "PRODUCT_DETAILS": {
    //   return {
    //     ...state,
    //     productDetailsError: action.error ? action.error : null,
    //     productDetailsSuccess: action.subtype === "success",
    //     productDetailsLoading: action.subtype === "loading",
    //     productDetails:
    //       action.subtype === "success"
    //         ? action.productDetails
    //         : state.productDetails
    //   };
    // }

    default:
      return state;
  }
}
