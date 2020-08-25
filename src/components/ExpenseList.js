import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>

      <div className="list-body">
        {props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // This object represents the different properties we want to add to the prop
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    filters: state.filters,
  };
};

// mapStateToProps defines what we want to grab off the redux store, and ExpenseList is componenet we want to create the connected version of
// Result is a brand new componenet, ExpenseList + props from the Store.
// Connect() connects the ExpenseList component to the redux store,
// it returns the higher order compoenet, which then wraps the ExpenseList component
export default connect(mapStateToProps)(ExpenseList);
