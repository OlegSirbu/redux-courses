import * as types from "../actions/actionsTypes";

export default function courseReducer(state = [], actions){
    switch(actions.type) {
        case types.CREATE_COURSE:
            return [
                ...state,
                Object.assign({}, actions.course)
            ];

            default:
                return state
    }
}
