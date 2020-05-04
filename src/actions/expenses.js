import uuid from 'uuid';

// Actions:
// They are JS objects, with a type property that descibes the action + an optional payload.
// Actions are displatched using store.dispatch. Dispatching means to send an action to the Reducer.

// Add Expense action
export const addExpense = ({description='',note='',amount=0,createdAt=0}={}) =>{
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