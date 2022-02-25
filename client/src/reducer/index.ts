import { FETCH_USERS } from "../actions/intex";

interface stateI {
  clash: [];
  filterClash: [];
}

const initialState: stateI = {
  clash: [],
  filterClash: [],
};

interface actionI {
  type: string;
  payload: string;
}

function reducer(state: stateI = initialState, action: actionI) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        clash: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
