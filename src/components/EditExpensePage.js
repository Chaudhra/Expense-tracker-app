import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) =>{
        this.props.editExpense(this.props.expense.id, expense);
        // console.log('updated', expense);
        this.props.history.push('/');
    }

    onRemove = () =>{
        this.props.startRemoveExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                 <ExpenseForm
                     expense={this.props.expense} 
                     onSubmit={this.onSubmit}
                 />
                 <button onClick={this.onRemove}>Remove</button>
            </div>
         );
    }

}



const mapStateToProps = (state, props) =>{
    return {
        // props.match.params is a key/value pair object passed from the URL. We check to see if 
        // any expenses in our store match the expense with the edit/id in the URL.If so, we return it
        // The props object should then contain the matched expense object
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id
        })
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return{
        editExpense: (id, expense)=>{
            return dispatch(editExpense(id,expense));
        },
        startRemoveExpense:(data)=>{
            return dispatch(startRemoveExpense(data));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);