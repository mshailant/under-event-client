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
      };

      case Action.TIME_FILTER:
      let dateSort =
        action.payload === "asc"
          ? state.allEventType.sort((a, b) => {
              if (a.date > b.date) return 1;
              if (b.date > a.date) return -1;
              return 0;
            })
          : state.allEventType.sort((a, b) => {
              if (a.date > b.date) return -1;
              if (b.date > a.date) return 1;
              return 0;
            });
      return {
        ...state,
        eventosDb: dateSort,
      };

      

    default:
      return {
        state,
      };
  }
}
export default rootReducer;
