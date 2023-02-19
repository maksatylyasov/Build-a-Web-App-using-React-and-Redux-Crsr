import { SEARCH } from "../actions/actions";

const initialState = { text: "" };

function searchApp(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return { text: action.text, id: action.id };
    default:
      return state;
  }
}

export default searchApp;
