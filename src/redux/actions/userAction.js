const BASE_URL = "http://localhost:3001";

export function SIGNUP_ACTION(newUser) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "SIGNUP",
          subtype: "loading"
        });

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(newUser)
        };
        fetch(`${BASE_URL}/users/register`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            dispatch({
              type: "SIGNUP",
              subtype: "success",
              signupData: result
            });
            localStorage.setItem("CURRENT_USER", result.user._id);
            resolve(result);
          })
          .catch((error) => {
            console.log("error", error);
            dispatch({
              type: "SIGNUP",
              subtype: "loading"
            });
            dispatch({
              type: "SIGNUP",
              error: false
            });
          });
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

export function LOGIN_ACTION(user) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: "LOGIN",
          subtype: "loading"
        });
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(user)
        };
        fetch(`${BASE_URL}/users/login`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            dispatch({
              type: "LOGIN",
              subtype: "success",
              loginData: result
            });
            localStorage.setItem("USER_TOKEN", result.accessToken);
            localStorage.setItem("CURRENT_USER", result.user._id);

            resolve(result);
          })
          .catch((error) => {
            console.log("error", error);
            dispatch({
              type: "LOGIN",
              subtype: "loading"
            });
            dispatch({
              type: "LOGIN",
              error: false
            });
          });
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

export function GET_PROFILE_ACTION() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        let userToken = localStorage.getItem("USER_TOKEN");
        let userId = localStorage.getItem("CURRENT_USER");

        dispatch({
          type: "GET_PROFILE",
          subtype: "loading"
        });
        let myHeaders = new Headers();
        myHeaders.append("Cookie", `accessToken= ${userToken}`);

        let requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };
        fetch(`${BASE_URL}/users/me/${userId}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log("profile", result);
            dispatch({
              type: "GET_PROFILE",
              subtype: "success",
              currentUser: result
            });
            resolve(result);
          })
            .catch((error) => {
            console.log("error", error);
            dispatch({
              type: "GET_PROFILE",
              subtype: "loading"
            });
            dispatch({
              type: "GET_PROFILE",
              error: false
            });
            rejects(error);
          });
      } catch (e) {
        rejects(e);
        dispatch({
          type: "GET_PROFILE",
          error: e
        });
      }
    });
  };
}
