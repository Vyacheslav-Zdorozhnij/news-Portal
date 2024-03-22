const initialState = {
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action: unknown) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
      return { ...state, loading: true, error: null };
    case "REGISTER_USER_SUCCESS":
      return { ...state, loading: false };
    case "REGISTER_USER_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
