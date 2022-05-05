import axios from "axios";
export const GET_ALL_EVENTS_DB = "GET_ALL_EVENTS_DB";
export const CREATE_EVENT = "CREATE_EVENT";
export const GET_BY_TITLE = "GET_BY_TITLE";
export const GET_DETAIL = "GET_DETAIL";
export const BY_EVENT_TYPE = "BY_EVENT_TYPE";
export const GET_STATES = "GET_STATES";
export const FILTER_DATE = "FILTER_DATE"
export const GET_USER = "GET_USER";
export const CREATE_USER = "CREATE_USER"
export const GET_ALL_CITIES = "GET_ALL_CITIES";
export const GET_ALL_GENEROS = "GET_ALL_GENEROS";




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

export function getAllCities(){
  return async function (dispatch){
    try {
      const cities = await axios.get("http://localhost:3001/events/solocitys");
      return dispatch({
        type: GET_ALL_CITIES,
        payload: cities.data
      })
    } catch (err) {
      console.log(err);
    }
  };
}

export function getAllGeneros(){
  return async function (dispatch){
    try {
      const generos = await axios.get("http://localhost:3001/events/sologeneros");
      return dispatch({
        type: GET_ALL_GENEROS,
        payload: generos.data
      })
    } catch (err) {
      console.log(err);
    }
  };
}

export function createEvent(payload) {
  return async (dispatch) => {
    try {
      const json = await axios.post(
        "http://localhost:3001/events/createEvent",
        payload
      );
      return dispatch({
        type: CREATE_EVENT,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getByTitle(title) {
  return async (dispatch) => {
    let obtener = await axios.get(
      `http://localhost:3001/events/getTitle?title=${title}`
    );
    return dispatch({
      type: GET_BY_TITLE,
      payload: obtener.data,
    });
  };
}
export function getDetail(id) {
  return async (dispatch) => {
    let json = await axios.get("http://localhost:3001/events/" + id);

    return dispatch({
      type: GET_DETAIL,
      payload: json.data,
    });
  };
}

//filtar por tipo de evento
export function byEventType(payload) {
  return {
    type: BY_EVENT_TYPE,
    payload,
  };
}

export function getState(payload) {
  return {
    type: GET_STATES,
    payload,
  };
}

export function getUserByEmail(email) {
  return async (dispatch) => {
    let json = await axios.get(
      `http://localhost:3001/users/getUser?email=${email}`
    );
    return dispatch({
      type: GET_USER,
      payload: json.data,
    });
  };
}

export function createUser(payload) {
  return async (dispatch) => {
    try {
      const json = await axios.post(
        "http://localhost:3001/users/createUser",
        payload
      );
      return dispatch({
        type: CREATE_USER,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
//filtrar por Date

export function byFilterDate(payload) {
  return {
    type: FILTER_DATE,
    payload
  }
}

