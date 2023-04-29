const initialState = {};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case "SIGNUP": {
      return {
        ...state,
        signupError: action.error ? action.error : null,
        signupSuccess: action.subtype === "success",
        signupLoading: action.subtype === "loading",
        signupData:
          action.subtype === "success" ? action.signupData : state.signupData
      };
    }
    case "LOGIN": {
      return {
        ...state,
        loginError: action.error ? action.error : null,
        loginSuccess: action.subtype === "success",
        loginLoading: action.subtype === "loading",
        loginData:
          action.subtype === "success" ? action.loginData : state.loginData
      };
    }
    case "GET_PROFILE": {
      return {
        ...state,
        currentUserError: action.error ? action.error : null,
        currentUserSuccess: action.subtype === "success",
        currentUserLoading: action.subtype === "loading",
        currentUser:
          action.subtype === "success"
            ? action.currentUser
            : state.currentUser
      };
    }

    default:
      return state;
  }
}
