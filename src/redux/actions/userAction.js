const BASE_URL = "http://localhost:3001";

export function SIGNUP_ACTION() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        // let userToken = await AsyncStorage.getItem("USER_TOKEN");
        dispatch({
          type: "SIGNUP",
          subtype: "loading"
        });
        let response = await fetch(`${BASE_URL}/products`);
        if (response.ok) {
          let result = await response.json();
          dispatch({
            type: "SIGNUP",
            subtype: "success",
            signupData: result
          });
          resolve(result);
        } else {
          dispatch({
            type: "SIGNUP",
            subtype: "loading"
          });
          dispatch({
            type: "SIGNUP",
            error: false
          });
        }
      } catch (e) {
        rejects(e);
        dispatch({
          type: "SIGNUP",
          error: e
        });
      }
    });
  };
}

export function LOGIN_ACTION() {
    return function (dispatch, getState) {
      return new Promise(async (resolve, rejects) => {
        try {
          // let userToken = await AsyncStorage.getItem("USER_TOKEN");
          dispatch({
            type: "LOGIN",
            subtype: "loading"
          });
          let response = await fetch(`${BASE_URL}/products`);
          if (response.ok) {
            let result = await response.json();
            dispatch({
              type: "LOGIN",
              subtype: "success",
              loginData: result
            });
            resolve(result);
          } else {
            dispatch({
              type: "LOGIN",
              subtype: "loading"
            });
            dispatch({
              type: "LOGIN",
              error: false
            });
          }
        } catch (e) {
          rejects(e);
          dispatch({
            type: "LOGIN",
            error: e
          });
        }
      });
    };
  }