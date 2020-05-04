import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) =>{
    return (
        <div>
           {
               props.expenses.length === 0 ? (
                <p>No expenses</p>
               ):(
                props.expenses.map((expense)=>{
                    return <ExpenseListItem key={expense.id} {...expense} />
                })      
               )
           }
            
        </div>
    );
};


const mapStateToProps = (state)=>{
    // This object represents the diff properties we want to add to the prop
    return {
        expenses:selectExpenses(state.expenses, state.filters),
        filters:state.filters
    };
};


// mapStateToProps defines what we want to grab off the Store, and ExpenseList is componenet we want to create the connected version of
// Result is a brand new componenet, ExpenseList + props from the Store.
// Connect() returns the higher order compoenet, which then wraps the ExpenseList component
export default connect(mapStateToProps)(ExpenseList);