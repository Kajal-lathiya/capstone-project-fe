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
          action.subtype === "success"
            ? action.productsData
            : state.productsData
      };
    }
    case "GET_PRODUCT_DETAILS": {
      return {
        ...state,
        productDetailsError: action.error ? action.error : null,
        productDetailsSuccess: action.subtype === "success",
        productDetailsLoading: action.subtype === "loading",
        productDetails:
          action.subtype === "success"
            ? action.productDetails
            : state.productDetails
      };
    }
    case "SEARCH_PRODUCTS": {
      return {
        ...state,
        searchProductsError: action.error ? action.error : null,
        searchProductsSuccess: action.subtype === "success",
        searchProductsLoading: action.subtype === "loading",
        searchProducts:
          action.subtype === "success"
            ? action.searchProducts
            : state.searchProducts
      };
    }
    case "CATEGORY_WISE_PRODUCTS": {
      return {
        ...state,
        catwiseProductsError: action.error ? action.error : null,
        catwiseProductsSuccess: action.subtype === "success",
        catwiseProductsLoading: action.subtype === "loading",
        catwiseProducts:
          action.subtype === "success"
            ? action.catwiseProducts
            : state.catwiseProducts
      };
    }

    default:
      return state;
  }
}
