import axios from "axios";
export const GET_ALL_EVENTS_DB = "GET_ALL_EVENTS_DB";

export function getAllEvent() {
    return async function(dispatch) {
        try {
            const json = await axios.get("http://localhost:3001/events/get");
            return dispatch({
                type: GET_ALL_EVENTS_DB,
                payload: json.data,

            })
        } catch(err) {
            console.log(err)
        }
    }
}