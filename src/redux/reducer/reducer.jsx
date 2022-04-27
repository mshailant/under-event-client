import {
GET_ALL_EVENTS_DB,
} from "../actions/actions.jsx";
const InitialState = {
    eventosDb: [],
}

function rootReducer(state = InitialState, action) {
    switch (action.type) {
        case GET_ALL_EVENTS_DB:
            return {
                ...state,
                eventosDb: action.payload
            }
        default:
            return {
                state,
            }

    }
}
export default rootReducer;