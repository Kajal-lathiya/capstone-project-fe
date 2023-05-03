const BASE_URL = "http://localhost:3001";

export function ADD_PRODUCT_ACTION(product) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "ADD_PRODUCT",
          subtype: "loading"
        });

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(product),
          redirect: "follow"
        };

        let response = await fetch(`${BASE_URL}/products`, requestOptions);
        if (response.ok) {
          let result = await response.json();
          dispatch({
            type: "ADD_PRODUCT",
            subtype: "success",
            productData: result
          });
          resolve(result);
        } else {
          dispatch({
            type: "ADD_PRODUCT",
            subtype: "loading"
          });
          dispatch({
            type: "ADD_PRODUCT",
            error: false
          });
        }
      } catch (e) {
        rejects(e);
        dispatch({
          type: "ADD_PRODUCT",
          error: e
        });
      }
    });
  };
}

export function ADD_PRODUCT_IMAGE_ACTION(productId, image) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "ADD_PRODUCTIMAGE",
          subtype: "loading"
        });

        let formdata = new FormData();
        formdata.append("mainPicture", image);

        let requestOptions = {
          method: "POST",
          body: formdata
        };

        const response = await fetch(
          `${BASE_URL}/products/${productId}/files`,
          requestOptions
        );
        if (response.ok) {
          let result = await response.json();
          dispatch({
            type: "ADD_PRODUCTIMAGE",
            subtype: "success",
            productImage: result
          });
          resolve(result);
        } else {
          dispatch({
            type: "ADD_PRODUCTIMAGE",
            subtype: "loading"
          });
          dispatch({
            type: "ADD_PRODUCTIMAGE",
            error: false
          });
        }
      } catch (e) {
        rejects(e);
        dispatch({
          type: "ADD_PRODUCTIMAGE",
          error: e
        });
      }
    });
  };
}

export function GET_PRODUCTS_ACTION() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "GET_PRODUCTS",
          subtype: "loading"
        });

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
          method: "GET",
          headers: myHeaders
        };

        let response = await fetch(`${BASE_URL}/products`, requestOptions);
        if (response.ok) {
          let result = await response.json();
          dispatch({
            type: "GET_PRODUCTS",
            subtype: "success",
            productsData: result
          });
          resolve(result);
        } else {
          dispatch({
            type: "GET_PRODUCTS",
            subtype: "loading"
          });
          dispatch({
            type: "GET_PRODUCTS",
            error: false
          });
        }
      } catch (e) {
        rejects(e);
        dispatch({
          type: "GET_PRODUCTS",
          error: e
        });
      }
    });
  };
}

export function GET_PRODUCT_DETAILS_ACTION(productId) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "GET_PRODUCT_DETAILS",
          subtype: "loading"
        });

        let response = await fetch(`${BASE_URL}/products/${productId}`);
        if (response.ok) {
          let result = await response.json();
          dispatch({
            type: "GET_PRODUCT_DETAILS",
            subtype: "success",
            productDetails: result
          });
          resolve(result);
        } else {
          dispatch({
            type: "GET_PRODUCT_DETAILS",
            subtype: "loading"
          });
          dispatch({
            type: "GET_PRODUCT_DETAILS",
            error: false
          });
        }
      } catch (e) {
        rejects(e);
        dispatch({
          type: "GET_PRODUCT_DETAILS",
          error: e
        });
      }
    });
  };
}


export function SEARCH_PRODUCTS_ACTION(name) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "SEARCH_PRODUCTS",
          subtype: "loading"
        });

        let requestOptions = {
          method: "GET",
        };

        let response = await fetch(`${BASE_URL}/products/search?name=${name}`, requestOptions);
        if (response.ok) {
          let result = await response.json();
          dispatch({
            type: "SEARCH_PRODUCTS",
            subtype: "success",
            searchProducts: result
          });
          resolve(result);
        } else {
          dispatch({
            type: "SEARCH_PRODUCTS",
            subtype: "loading"
          });
          dispatch({
            type: "SEARCH_PRODUCTS",
            error: false
          });
        }
      } catch (e) {
        rejects(e);
        dispatch({
          type: "SEARCH_PRODUCTS",
          error: e
        });
      }
    });
  };
}

export function CATEGORY_WISE_PRODUCTS_ACTION(category) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "CATEGORY_WISE_PRODUCTS",
          subtype: "loading"
        });

        let requestOptions = {
          method: "GET",
        };

        let response = await fetch(`${BASE_URL}/products/search?category=${category}`, requestOptions);
        if (response.ok) {
          let result = await response.json();
          dispatch({
            type: "CATEGORY_WISE_PRODUCTS",
            subtype: "success",
            catwiseProducts: result
          });
          resolve(result);
        } else {
          dispatch({
            type: "CATEGORY_WISE_PRODUCTS",
            subtype: "loading"
          });
          dispatch({
            type: "CATEGORY_WISE_PRODUCTS",
            error: false
          });
        }
      } catch (e) {
        rejects(e);
        dispatch({
          type: "CATEGORY_WISE_PRODUCTS",
          error: e
        });
      }
    });
  };
}
