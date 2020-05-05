import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from '../components/ExpenseListFilters.js';
import ExpenseSummary from '../components/ExpenseSummary';

const ExpenseDashboardPage = () => {
    return  (
        <div>
            <ExpenseSummary />
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
};

export default ExpenseDashboardPage;