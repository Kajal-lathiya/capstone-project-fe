const BASE_URL = "http://localhost:3001";

export function CARTITEMS_ACTION() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "GET_CARTITEMS",
          subtype: "loading"
        });
        let UserID = localStorage.getItem("CURRENT_USER");

        let requestOptions = {
          method: "GET",
          redirect: "follow"
        };
        fetch(`${BASE_URL}/cart/${UserID}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log("cartitems action", result);
            dispatch({
              type: "GET_CARTITEMS",
              subtype: "success",
              cartData: result
            });
            resolve(result);
          })
          .catch((error) => {
            console.log("error", error);
            rejects(error);
            dispatch({
              type: "GET_CARTITEMS",
              subtype: "loading"
            });
            dispatch({
              type: "GET_CARTITEMS",
              error: error
            });
          });
      } catch (e) {
        rejects(e);
        dispatch({
          type: "GET_CARTITEMS",
          error: e
        });
      }
    });
  };
}

export function ADDTOCART_ACTION(product) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "ADDTO_CART",
          subtype: "loading"
        });
        let UserID = localStorage.getItem("CURRENT_USER");

        let cartItem = {
          userID: UserID,
          productID: product._id,
          quantity: 1
        };

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(cartItem);

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };

        fetch(`${BASE_URL}/cart/addToCart`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            dispatch({
              type: "ADDTO_CART",
              subtype: "success",
              addtocartData: result
            });
            resolve(result);
          })
          .catch((error) => {
            console.log("error", error);
            rejects(error);
            dispatch({
              type: "ADDTO_CART",
              subtype: "loading"
            });
            dispatch({
              type: "ADDTO_CART",
              error: error
            });
          });
      } catch (e) {
        rejects(e);
        dispatch({
          type: "ADDTO_CART",
          error: e
        });
      }
    });
  };
}

export function UPDATE_QUNTITY_ACTION(item) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "UPDATE_QUNTITY",
          subtype: "loading"
        });
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify(item);
        let requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };

        fetch(`${BASE_URL}/cart/updateCartItem`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            dispatch({
              type: "UPDATE_QUNTITY",
              subtype: "success",
              updateQuntity: result
            });
            resolve(result);
          })
          .catch((error) => {
            console.log("error", error);
            rejects(error);
            dispatch({
              type: "UPDATE_QUNTITY",
              subtype: "loading"
            });
            dispatch({
              type: "UPDATE_QUNTITY",
              error: error
            });
          });
      } catch (e) {
        rejects(e);
        dispatch({
          type: "UPDATE_QUNTITY",
          error: e
        });
      }
    });
  };
}

export function REMOVE_CARTITEM_ACTION(cartItemID) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "REMOVE_CARTITEM",
          subtype: "loading"
        });
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
          method: "DELETE",
          headers: myHeaders
        };
        let response = await fetch(
          `${BASE_URL}/cart/${cartItemID}`,
          requestOptions
        );
        if (response.ok) {
          console.log(response.ok);
          dispatch({
            type: "REMOVE_CARTITEM",
            subtype: "success",
            deleteCartItem: response.ok
          });
          resolve(response);
        } else {
          dispatch({
            type: "REMOVE_CARTITEM",
            subtype: "loading"
          });
          dispatch({
            type: "REMOVE_CARTITEM",
            error: response.ok
          });
        }
      } catch (e) {
        rejects(e);
        dispatch({
          type: "REMOVE_CARTITEM",
          error: e
        });
      }
    });
  };
}
