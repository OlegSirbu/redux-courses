import * as types from "../actions/actionsTypes";
import initialSate from './initialState';

export default function courseReducer(state = initialSate.courses, actions){
  switch(actions.type) {
      case types.LOAD_COURSES_SUCCESS:
        return actions.courses;

      case types.CREATE_COURSE_SUCCESS:
          return [
            ...state,
            Object.assign({}, actions.course)
          ];
    case types.UPDATE_COURSE_SUCCESS:
          return [
            ...state.filter(course => course.id !== actions.course.id),
            Object.assign({}, actions.course)
          ];

    default:
        return state
  }
}
