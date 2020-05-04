import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

 
export class AddExpensePage extends React.Component{
    onSubmit = (expense)=>{
        // Add expense data to redux store
        // props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        // Automatically redirect to dashboard page after creating a new expense
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}




const mapDispatchToProps = (dispatch) =>{
    return {
        addExpense: (expense) => {
            return dispatch(addExpense(expense));
        }
    };
};


export default connect(undefined, mapDispatchToProps )(AddExpensePage);