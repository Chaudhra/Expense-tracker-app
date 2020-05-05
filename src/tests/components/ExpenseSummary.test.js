import React from 'react'
import {shallow} from 'enzyme'
import {expenses} from '../fixtures/expenses';
import {ExpenseSummary} from '../../components/ExpenseSummary';

test('should render ExpenseSummary component', ()=>{
    const wrapper = shallow(<ExpenseSummary />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with 1 expense',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();

});


test('should correctly render ExpenseSummary with multiple expense',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={10} expensesTotal={53433435} />);
    expect(wrapper).toMatchSnapshot();

});