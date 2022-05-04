import * as Action from "../actions/actions.jsx";
const InitialState = {
  eventosDb: [],

  eventosBack: [],

  detailEventos: {},

  allEventType: [],

  filterTime: [],

  allEventState: [],

  userLogedin: {},

  users: [],
};

function rootReducer(state = InitialState, action) {
  switch (action.type) {
    case Action.GET_ALL_EVENTS_DB:
      return {
        ...state,
        eventosBack: action.payload,
        eventosDb: action.payload,
        allEventType: action.payload,
        allEventState: action.payload,
      };
    case Action.CREATE_EVENT:
      return {
        ...state,
      };

    case Action.GET_DETAIL:
      return {
        ...state,
        detailEventos: action.payload,
      };
    case Action.GET_BY_TITLE:
      return {
        ...state,
        eventosDb: action.payload,
      };

    case Action.GET_STATES:
      const allState = state.allEventState;
      const stateFilter =
        action.payload === "All"
          ? allState
          : allState.filter((g) => g.state === action.payload);
      return {
        ...state,

        eventosDb: stateFilter,
      };

    case Action.BY_EVENT_TYPE:
      const allType = state.allEventType;
      const typeFilter =
        action.payload === "All"
          ? allType
          : allType.filter((g) => g.eventType === action.payload);
      return {
        ...state,

        eventosBack: typeFilter,
        eventosDb: typeFilter,
      };

    case Action.GET_USER:
      return {
        ...state,
        userLogedin: action.payload,
      };

    default:
      return {
        state,
      };
  }
}
export default rootReducer;
