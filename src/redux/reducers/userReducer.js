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
    // case "ADDTO_CART": {
    //   return {
    //     ...state,
    //     addtocartError: action.error ? action.error : null,
    //     addtocartSuccess: action.subtype === "success",
    //     addtocartLoading: action.subtype === "loading",
    //     addtocartData:
    //       action.subtype === "success"
    //         ? action.addtocartData
    //         : state.addtocartData
    //   };
    // }

    default:
      return state;
  }
}
