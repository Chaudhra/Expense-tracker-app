import uuid from 'uuid';
import database from '../firebase/firebase';



// Actions:
// They are JS objects, with a type property that descibes the action + an optional payload.
// Actions are displatched using store.dispatch. Dispatching means to send an action to the Reducer.

// Add Expense action
export const addExpense = (expense) =>{
    return {
        type: 'ADD_EXPENSE',
        expense:expense
    }
}

export const startAddExpense = (expenseData = {})=>{
    return (dispatch) =>{
        const {
            description='',
            note='',
            amount=0,
            createdAt=0
        } = expenseData //destructure from expense data, just another way of doing it

        const expense = {description, note, amount, createdAt}

       return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });

    }
}

// REMOVE_EXPENSE
export const removeExpense = ({id}={})=>{
    return {
        type:'REMOVE_EXPENSE',
        id:id
    }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) =>{
    return {
        type:'EDIT_EXPENSE',
        id:id,
        updates:updates     //An object of expense properties we want to update
    }
}