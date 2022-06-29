import { userConstants } from "../actions/constants";

const initState = {
  token: null,
  user: {
    fullName: "",
    email: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  console.log(action);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case userConstants.SIGNUP_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.SIGNUP_SUCCESS:
      state = {
        ...state,
        loading: false,
        authenticate: true,
        authenticating: false,
        message: action.payload.message,
      };
      break;
    case userConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
  }
  return state;
};
