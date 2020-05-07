import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default() =>{
    // Store
    // We have to pass a reducer to it, so the Store knows which reducer will handle changes to the State
    const store = createStore(
        combineReducers({
            expenses: expensesReducer, //register the reducer
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk)) 
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

