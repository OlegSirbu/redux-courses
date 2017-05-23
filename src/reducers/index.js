import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxStatusReducer from './ajaxSatatusReducer';

const rootReducers = combineReducers({
    courses,
    authors,
    ajaxStatusReducer
});

export default rootReducers;
