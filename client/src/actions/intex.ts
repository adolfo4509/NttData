import axios from "axios";
import { Dispatch } from "redux";
const BASE_URL = "http://localhost:3001/api/";
const CLANS_URL = BASE_URL + "clans/clans";
export const FETCH_USERS = "FETCH_USERS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(CLANS_URL);
    dispatch({
      type: "FETCH_USERS",
      payload: response.data,
    });
  };
};
