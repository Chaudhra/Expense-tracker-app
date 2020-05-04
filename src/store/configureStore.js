import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default() =>{

    // Store
    // We have to pass a reducer to it, so the Store knows which reducer will handle changes to the State
    const store = createStore(
        combineReducers({
            expenses: expensesReducer, //register the reducer
            filters: filtersReducer
        }), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

