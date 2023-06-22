import * as types from "./actionType";
const init = {
  signup: [],
  loading: false,
  isAuth:localStorage.getItem('todoToken')?true:false,
  error: false,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.USER_SIGNUP_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        signup: payload,
      };
    }
    case types.USER_SIGNUP_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export {reducer};
