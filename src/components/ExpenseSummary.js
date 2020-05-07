import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import {getExpensesTotal} from '../selectors/expense-total';

export const ExpenseSummary = (props) =>{
    return (
        <div>
            <h2> {props.expenseCount} expenses totalling {numeral(props.expensesTotal/100).format('$0,0.00')} </h2>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
        expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
    };
}

export default connect(mapStateToProps)(ExpenseSummary);