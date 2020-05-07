import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore.js';
import {startAddExpense} from './actions/expenses.js';
import {setTextFilter} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';


const store = configureStore();

// Change listner that is called anytime an action is dispatched 
store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(startAddExpense({description:'water bill',amount:4500}));
const expenseTwo = store.dispatch(startAddExpense({description:'Gas bill',amount:1000, createdAt:1000}));
const expenseThree = store.dispatch(startAddExpense({description:'Rent',amount:109500}));

// store.dispatch(setTextFilter('water'));

const jsx = (
    // Provides store access to all of our componenets by using the Provider component
    <Provider store={store}>  
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));