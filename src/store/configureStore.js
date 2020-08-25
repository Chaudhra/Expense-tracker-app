import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Redux store
  // We have to pass a reducer to it, so the redux store knows which reducer will handle changes to the state
  const store = createStore(
    combineReducers({
      expenses: expensesReducer, //register the reducer
      filters: filtersReducer,
      auth: authReducer,
    }),
    // Thunk is middleware which allows us to return a function inside an action creater, which can interact with the Firestore DB
    // Thunk halts the dispatch, performes the action, then resumes the dispatch
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
