import * as Action from "../actions/actions.jsx";
const InitialState = {
  eventosDb: [],

  detailEventos: {},	

  allEventType: [],

  filterTime: []

};

function rootReducer(state = InitialState, action) {
  switch (action.type) {
    case Action.GET_ALL_EVENTS_DB:
      return {
        ...state,
        eventosDb: action.payload,
        allEventType: action.payload,
      };
    case Action.CREATE_EVENT:
      return {
        ...state,
      };
    case Action.GET_TIME:
      return {
        ...state,
        eventosDb: action.payload,
      }
    case Action.GET_DETAIL:
      
      return {
        ...state,
        detailEventos: action.payload,
      };

    case Action.BY_EVENT_TYPE:
      const allEventType = state.allEventType;
      const eventFilter = action.payload === 'All' ?
        allEventType :
        allEventType.filter(i => i.eventType === action.payload)
      return {
        ...state,
        eventosDb: eventFilter,
      }

      

    default:
      return {
        state,
      };
  }
}
export default rootReducer;
