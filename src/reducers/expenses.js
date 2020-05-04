
// Expenses reducer (The reducer is a pure function that takes the previous state and an action, and returns the next state)
const expensesReducerDefaultState = []
const expensesReducer = (state=expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            //...state is a spread operator, inserts all values in the state array
            // When we return, this will be the new state object, so we need to make sure we don't override the whole state object
            // That is why we use ...state and append action.expense property onto it
            return [...state,action.expense]; 
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


export default expensesReducer;