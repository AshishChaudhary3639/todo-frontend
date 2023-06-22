import * as types from "./actionType";
const init = {
  todos: [],
  loading: false,
  error: false,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.USER_TODO_REQUEST: {
      return { ...state, loading: true };
    }

    case types.USER_TODO_SUCCESS: {
      return { ...state, loading: false, todos: payload };
    }
    case types.USER_TODO_FAILURE: {
      return { ...state, loading: false, todos: [], error: true };
    }
    default:
      return state;
  }
};

export { reducer };
