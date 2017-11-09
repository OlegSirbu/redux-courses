import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallInProgress from './ajaxSatatusReducer';

const rootReducers = combineReducers({
    courses,
    authors,
    ajaxCallInProgress
});

export default rootReducers;
