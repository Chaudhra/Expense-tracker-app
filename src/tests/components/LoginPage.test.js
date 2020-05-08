import {LoginPage} from '../../components/LoginPage';
import React from 'react';
import {shallow} from 'enzyme';


test('should render LoginPage',()=>{
    const wrapper = shallow(<LoginPage />);
    
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click',()=>{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    // find the logout button to click
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});