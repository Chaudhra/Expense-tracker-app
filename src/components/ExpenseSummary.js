import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import getVisibleExpenses from "../selectors/expenses";
import { getExpensesTotal } from "../selectors/expense-total";

export const ExpenseSummary = (props) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
          {" "}
          <span>{props.expenseCount}</span> expenses totalling{" "}
          <span>{numeral(props.expensesTotal / 100).format("$0,0.00")}</span>{" "}
        </h2>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
    expensesTotal: getExpensesTotal(
      getVisibleExpenses(state.expenses, state.filters)
    ),
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
