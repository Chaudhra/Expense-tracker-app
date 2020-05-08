import React from 'react';
import {shallow} from 'enzyme'
import {Header} from '../../components/Header';


// Shallow rendering only renders the given component. Full dom rendering renders child componenets

test('should render Header correctly',()=>{
    const wrapper = shallow(<Header startLogout={()=>{}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click',()=>{
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    // find the logout button to click
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});