import React from 'react';
import {shallow} from 'enzyme'
import Header from '../../components/Header';


// Shallow rendering only renders the given component. Full dom rendering renders child componenets

test('should render Header correctly',()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});