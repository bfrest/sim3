const initialState = {
  id: "",
  username: "",
  profilePicture: ""
};
// action types
const LOGIN = "LOGIN";

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { id: action.payload, username: action.payload, profilePicture: action.payload });
    default:
      return state;
  }
}

// action builders
export function logIn(id, username, profilePicture) {
  return {
    type: LOGIN,
    payload: { id, username, profilePicture }
  };
}

export default reducer;
