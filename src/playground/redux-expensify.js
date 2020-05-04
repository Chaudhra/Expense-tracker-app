import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Add Expense action
const addExpense = ({description='',note='',amount=0,createdAt=0}={}) =>{
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description:description,
            note:note,
            amount:amount,
            createdAt:createdAt

        }
    }
}

// REMOVE_EXPENSE
const removeExpense = ({id}={})=>{
    return {
        type:'REMOVE_EXPENSE',
        id:id
    }
}

// EDIT_EXPENSE
const editExpense = (id, updates) =>{
    return {
        type:'EDIT_EXPENSE',
        id:id,
        updates:updates     //An object of expense properties we want to update
    }
}

// SET_FILTER
const setTextFilter = (text='')=>{
    return{
        type:'SET_TEXT_FILTER',
        text:text
    }
}

// SORT_BY_DATE
const sortByDate =()=>{
    return{
        type:'SORT_BY_DATE'
    }
}

// SORT_BY_DATE
const sortByAmount =()=>{
    return{
        type:'SORT_BY_AMOUNT'
    }
}

// SET_START_DATE
const setStartDate=(startDate = undefined)=>{
    return {
        type:'SET_START_DATE',
        date:startDate
    }
}

// SET_END_DATE
const setEndDate=(endDate)=>{
    return {
        type:'SET_END_DATE',
        date:endDate
    }
}



// Expenses reducer (The reducer is a pure function that takes the previous state and an action, and returns the next state)
const expensesReducerDefaultState = []
const expensesReducer = (state=expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense]; //...state is a spread operator, inserts all values in the state array
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>{
                return expense.id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id === action.id){
                    return {
                        ...expense,           //Object spread operator, makes a copy of expense object
                        ...action.updates     //Object spread operator, we update the properties in the expense object copy (ex amount)
                    }
                }else{
                    return expense
                }
            });
        default:
            return state;
    }
};


// Filters reducer
const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filtersReducer = (state=filtersReducerDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text:action.text}; //Return a new state object using object spread operator and override text property with <text:action.text>
        case 'SORT_BY_AMOUNT':
            return{...state, sortBy:'amount'};
        case 'SORT_BY_DATE':
            return{...state, sortBy:'date'};
        case 'SET_START_DATE':
            return{...state, startDate:action.date};
        case 'SET_END_DATE':
            return{...state, endDate:action.date};
        default:
            return state;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses,{text, sortBy, startDate, endDate}) =>{

    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch  && endDateMatch && textMatch;
    }).sort((a, b)=>{

        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }

    });
}



// Store
const store = createStore(
    combineReducers({
        expenses: expensesReducer, //register the reducer
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne =  store.dispatch(addExpense({description:'Rent',amount:1, createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:100, createdAt:-1000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount:500 }));

// store.dispatch(setTextFilter('rent'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


const demoState = {
    expenses: [{
        id:'ss',
        description:'March rent',
        note:'rent payment',
        amount: 100,
        createdAt:0
    }],

    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name:"adil",
//     age:20
// }

// console.log({
//     ...user,
//     location:"Toronot"
// })