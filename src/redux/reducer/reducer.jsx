import * as Action from "../actions/actions.jsx";
const InitialState = {
  eventosDb: [],

  detailEventos: {},	

  allEventType: [],

  filterTime: [],

  allEventState: []

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
    case Action.GET_BY_TITLE:
      return{
        ...state,
        eventosDb: action.payload,
        
      }

   
      case Action.GET_STATES:
        const allState = state.eventosDb;
        const stateFilter =
          action.payload === "All"
            ? allState
            : allState.filter((g) =>
                g.state === action.payload
              );
        return {
          ...state,
          
          eventosDb: stateFilter
          
        

        };

        case Action.BY_EVENT_TYPE:
        const allType = state.eventosDb;
        const typeFilter =
          action.payload === "All"
            ? allType
            : allType.filter((g) =>
                g.eventType === action.payload
              );
        return {
          ...state,
         
          eventosDb: typeFilter
          
        

        };
      

    default:
      return {
        state,
      };
  }
}
export default rootReducer;
