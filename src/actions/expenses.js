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
    // Thunked/async actions get called with dispatch and getState
    return (dispatch, getState) =>{
        const uid = getState().auth.uid;
        const {
            description='',
            note='',
            amount=0,
            createdAt=0
        } = expenseData //destructure from expense data, just another way of doing it

        const expense = {description, note, amount, createdAt}
        
        // Returning so we can make use of promise chaning 
        // We push the data to firebase and then call the dispatch action for adding the data to the redux store
       return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
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
};

export const startRemoveExpense =({id}={}) =>{
    return (dispatch, getState) =>{
        const uid = getState().auth.uid;
        // Remove the epxense with the specific id from Firebase DB
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            // Make sure its also remvoed from the redux store
            dispatch(removeExpense({id:id}));
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) =>{
    return {
        type:'EDIT_EXPENSE',
        id:id,
        updates:updates     //An object of expense properties we want to update
    }
}

export const startEditExpense = (id, updates) =>{
    
    return (dispatch, getState) =>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update({
            ...updates
        }).then(()=>{
            dispatch(editExpense(id, updates));
        });
    }
}


// SET_EXPENSES - aka fetch the data from Firebase DB
export const setExpenses = (expenses) =>{
    return {
        type:'SET_EXPENSES',
        expenses: expenses
    }
};

export const startSetExpenses = () =>{
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // Fetch the data from the Firebase DB and add push it into the expenses array
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
            const expenses = [];

            // Convert object structure from Firebase, into an array structure
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            // Call the setExpenses action and pass the expenses array to the reducer, so that the
            // reducer can update the state to include all expenses that live on the Firebase DB
            dispatch(setExpenses(expenses));

        });

    }
};
