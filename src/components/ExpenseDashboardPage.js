import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from '../components/ExpenseListFilters.js';

const ExpenseDashboardPage = () => {
    return  (
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
};

export default ExpenseDashboardPage;
