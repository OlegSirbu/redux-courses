import * as types from "../actions/actionsTypes";

export default function courseReducer(state = [], actions){
  switch(actions.type) {
      case types.LOAD_COURSES_SUCCESS:
        return actions.courses;

      default:
        return state
  }
}
