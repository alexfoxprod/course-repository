import { combineReducers, compose, createStore } from "redux";
import { tasksReducer } from "./reducers/reducerTasks";

const rootReducer = combineReducers({
  tasksList: tasksReducer,
});

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
