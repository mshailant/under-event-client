import axios from "axios";
export const GET_ALL_EVENTS_DB = "GET_ALL_EVENTS_DB";
export const CREATE_EVENT = "CREATE_EVENT";

export function getAllEvent() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/events/getAll");
      return dispatch({
        type: GET_ALL_EVENTS_DB,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function createEvent(payload) {
  return async () => {
    try {
      const json = await axios.post(
        "http://localhost:3001/events/createEvent",
        payload
      );
      return {
        type: CREATE_EVENT,
        payload,
      };
    } catch (err) {
      console.log(err);
    }
  };
}
