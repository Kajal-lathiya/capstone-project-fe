const BASE_URL = "http://localhost:3001";

export function ADD_PRODUCT_ACTION(product) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "ADD_PRODUCT",
          subtype: "loading"
        });
        let userToken = localStorage.getItem("USER_TOKEN");

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", `accessToken=${userToken}`);

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(product),
          redirect: "follow"
        };

        let response = await fetch(`${BASE_URL}/products`, requestOptions);
        if (response.ok) {
          let result = await response.json();
          console.log("result--product", result);
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

        console.log("action image", image);
        console.log("action id", productId);
        const form = new FormData();
        form.append("mainPicture", image);

        const config = {
          method: "POST",
          body: form
        };

        const response = await fetch(
          `${BASE_URL}/products/${productId}/files`,
          config
        );
        if (response.ok) {
          let result = await response.json();
          console.log("result--product", result);
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
        let userToken = localStorage.getItem("USER_TOKEN");

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", `accessToken=${userToken}`);

        let requestOptions = {
          method: "GET",
          headers: myHeaders
        };

        let response = await fetch(`${BASE_URL}/products`, requestOptions);
        if (response.ok) {
          let result = await response.json();
          console.log("result--product", result);
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
