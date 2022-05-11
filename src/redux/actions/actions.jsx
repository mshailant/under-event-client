import axios from "axios";
export const GET_ALL_EVENTS_DB = "GET_ALL_EVENTS_DB";
export const CREATE_EVENT = "CREATE_EVENT";
export const GET_BY_TITLE = "GET_BY_TITLE";
export const GET_DETAIL = "GET_DETAIL";
export const BY_EVENT_TYPE = "BY_EVENT_TYPE";
export const GET_STATES = "GET_STATES";
export const UPDATE_USER = "UPDATE_USER";
export const FILTER_DATE = "FILTER_DATE";
export const GET_USER = "GET_USER";
export const CREATE_USER = "CREATE_USER";
export const GET_ALL_CITIES = "GET_ALL_CITIES";
export const GET_ALL_GENEROS = "GET_ALL_GENEROS";
export const GET_USERS = "GET_USERS";
export const BAN_USER = "BAN_USER";
export const GET_TICKETS = "GET_TICKETS"
export const GET_ORDER_DETAIL = "GET_ORDER_DETAIL";

const API_URL = "http://localhost:3001";

export function getAllEvent() {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${API_URL}/events/getAll`);
      return dispatch({
        type: GET_ALL_EVENTS_DB,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getAllCities() {
  return async function (dispatch) {
    try {
      const cities = await axios.get(`${API_URL}/events/solocitys`);
      return dispatch({
        type: GET_ALL_CITIES,
        payload: cities.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getAllGeneros() {
  return async function (dispatch) {
    try {
      const generos = await axios.get(`${API_URL}/events/sologeneros`);
      return dispatch({
        type: GET_ALL_GENEROS,
        payload: generos.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function createEvent(payload) {
  return async (dispatch) => {
    try {
      const json = await axios.post(`${API_URL}/events/createEvent/`, payload);
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
    let obtener = await axios.get(`${API_URL}/events/getTitle?title=${title}`);
    return dispatch({
      type: GET_BY_TITLE,
      payload: obtener.data,
    });
  };
}
export function getDetail(id) {
  return async (dispatch) => {
    let json = await axios.get(`${API_URL}/events/` + id);

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

export function createUser(payload) {
  return async (dispatch) => {
    try {
      const json = await axios.post(`${API_URL}/users/createUser`, payload);
      return dispatch({
        type: CREATE_USER,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getUserByExternalId(externalId) {
  return async (dispatch) => {
    let json = await axios.get(`${API_URL}/users/${externalId}`);
    return dispatch({
      type: GET_USER,
      payload: json.data,
    });
  };
}

export function updateUser(payload, externalId) {
  return async (dispatch) => {
    try {
      const json = await axios.put(`${API_URL}/users/${externalId}`, payload);
      return dispatch({
        type: UPDATE_USER,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getUsers() {
  return async (dispatch) => {
    let json = await axios.get(`${API_URL}/users`);
    console.log(json.data);
    return dispatch({
      type: GET_USERS,
      payload: json.data,
    });
  };
}

export function banUser(externalId, block) {
  return async (dispatch) => {
    try {
      const json = await axios.post(`${API_URL}/users/ban`, {
        externalId,
        block,
      });

      return dispatch({
        type: BAN_USER,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function byFilterDate(payload) {
  return {
    type: FILTER_DATE,
    payload,
  };
}

export function getTickets(id) {
  return async (dispatch) => {
    let json = await axios.get(`${API_URL}/events/getTiketsDisponibles${id}`);

    return dispatch({
      type: GET_TICKETS,
      payload: json.data,
    });
  };
<<<<<<< HEAD
}
=======
};
// RUTA PARA TRAERME EL ORDEL DETAIL DE UN EVENTO
export function getOrderDetail(id) {
  return async (dispatch) => {
    let json = await axios.get(`http://localhost:3001/users/getOrder${id}`);
    return dispatch({
      type: GET_ORDER_DETAIL,
      payload: json.data,
    });
  };
};
>>>>>>> dev
