const BASE_URL = "http://localhost:3001";

export function CHECKOUT_ACTION(totalmonay, token, productIds) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "CHECKOUT_ORDER",
          subtype: "loading"
        });
        let userID = localStorage.getItem("CURRENT_USER");

        let requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: totalmonay,
            token,
            userID,
            productIds
          })
        };

        fetch(`${BASE_URL}/checkout`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            dispatch({
              type: "CHECKOUT_ORDER",
              subtype: "success",
              checkoutData: result
            });
            resolve(result);
          })
          .catch((error) => {
            console.log("error", error);
            rejects(error);
            dispatch({
              type: "CHECKOUT_ORDER",
              subtype: "loading"
            });
            dispatch({
              type: "CHECKOUT_ORDER",
              error: error
            });
          });
      } catch (e) {
        rejects(e);
        dispatch({
          type: "CHECKOUT_ORDER",
          error: e
        });
      }
    });
  };
}
