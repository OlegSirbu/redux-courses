import * as types from "../actions/actionsTypes";
import initialSate from './initialState';

export default function authorReducer(state = initialSate.authors, actions){
  switch(actions.type) {
      case types.LOAD_AUTHORS_SUCCESS:
        return actions.authors;

      default:
        return state
  }
}
