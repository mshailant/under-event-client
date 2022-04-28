import * as Action from "../actions/actions.jsx";
const InitialState = {
  eventosDb: [],
};

function rootReducer(state = InitialState, action) {
  switch (action.type) {
    case Action.GET_ALL_EVENTS_DB:
      return {
        ...state,
        eventosDb: action.payload,
      };
    case Action.CREATE_EVENT:
      return {
        ...state,
      };
    default:
      return {
        state,
      };
  }
}
export default rootReducer;
