import { createStore, combineReducers } from 'redux';
import { tasksReducer } from './reducers';

const rootReducer = combineReducers({
    tasks: tasksReducer,
});

export default createStore(rootReducer);