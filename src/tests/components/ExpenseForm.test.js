import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import {expenses} from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm corectly',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data',()=>{
    const wrapper = shallow(<ExpenseForm expense ={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    // Need to mimic preventDefault becasue it expects an 'e' param but none is passted during the test
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    // We can use wrapper.state('') to fetch the state off of wrapper for the component
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change',()=>{
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm />);
    // Becase we have two input forms, we use .at(index) to target the specfic one we want to use in the test
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change',()=>{
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);
    // No need to use .at(index) here becase we only have one textarea
    wrapper.find('textarea').simulate('change',{
        target:{value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if input is valid',()=>{
    const value = '12.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if input is invalid',()=>{
    const value = '12.50000';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission',()=>{
    // Spies allow us to creat functions we can pass to our componenets
    // When an event happens, like a form submission, we can check if it was called (called, called x # of times, called with specifc data)
    const onSubmitSpy = jest.fn(); //returns a new spy
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    // Simulate form submission
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });
    
    expect(wrapper.state('error')).toBe('');
    // We can't just pass expenses[0] becase its going to have an ID, and the onSubmit function wouldn't have assigned an ID to an expense yet
    // So we just manually define the exact object that we expect the onSubmit prop to be called with correct properties
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note: expenses[0].note,
        createdAt:expenses[0].createdAt
    });
});

test('should set new date on date change',()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />);
    // Select the SingeDatePicker component and select the onDateChange prop. The onDateChange expects to be called with a moment
    // instance, so that is why we pass in (now)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
});

test('should set calendar focus on change',()=>{
    const focused = true
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});