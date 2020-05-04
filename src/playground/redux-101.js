import {createStore} from 'redux';

// Action generator functions return action objects
// Below example makes use of destructuring as an object is passed in as a param. Default value of 1 is applied. 
const incrementCount = ({incrementBy = 1} = {}) =>{
    return {
        type:'INCREMENT',
        incrementBy: incrementBy
    }
}

const decrementCount = ({decrementBy = 1} = {})=>{
    return {
        type:'DECREMENT',
        decrementBy: decrementBy
    }
}

const resetCount = () =>{
    return {
        type:'RESET'
    }
}

const setCount = ({count = 1} = {}) =>{
    return {
        type:'SET',
        count: count
    }
}



// This function is called a Reducer - specifices how application state changes in response to Actions (which descrive something has happned) 
//1. Reducers are pure functions - output is determined by input alone
//2. Never change state or action - always retun new object with updated state
const countReducer = (state={count:0},action)=>{
    // Its common to use a switch statement to react to actions that are dispatched
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return{
                count: action.count
            }
        case 'RESET':
            return {
                count: state.count = 0
            };
        default:
            return state;
        }
}

// Gets called once to setup the store, and then for every dispatch call
const store = createStore(countReducer);


// Watch for store changes to redux state
// store.subscribe returns a function you can call to unsubscribe. 
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});


// Actions - an object that gets set to the redux store. They are our way of communicating with the store. Actionsa are just objects.
// We get it to the store using store.dispatch
// Type always needs to be provided but you can have dynamic actions by providing additional values (incrementBy)

// Increment the count
store.dispatch(incrementCount({incrementBy: 100}));

// Reset to 0
store.dispatch(resetCount());

// Decrement the count
store.dispatch(decrementCount({decrementBy:300}));


store.dispatch(setCount({count:909}))
