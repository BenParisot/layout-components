import React from 'react';
import { shallow } from 'enzyme';
import Dog from '../components/Dog';
import Header from '../components/Header';

describe('Dog component', () => {
  it('renders a Dog', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Header component', () => {
  it('renders a Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
