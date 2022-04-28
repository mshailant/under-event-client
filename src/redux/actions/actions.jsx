import axios from "axios";
export const GET_ALL_EVENTS_DB = "GET_ALL_EVENTS_DB";
export const CREATE_EVENT = "CREATE_EVENT";
export const GET_BY_TITLE = "GET_BY_TITLE";

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

export function getByTitle(title) {
  return async (dispatch) => {
    let obtener = await axios.get(`http://localhost:3001/events/getTitle?title=${title}`);
      return dispatch({
          type: GET_BY_TITLE,
          payload: obtener.data,
        });
  };
}
