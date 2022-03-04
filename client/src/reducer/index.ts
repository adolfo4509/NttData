import { FETCH_USERS, ORDER_BY_NAME } from "../actions/intex";

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
    case ORDER_BY_NAME:
      return {
        ...state,
        filterClash: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
