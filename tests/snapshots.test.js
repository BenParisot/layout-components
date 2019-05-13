import React from 'react';
import { shallow } from 'enzyme';
import Dog from '../components/Dog';

describe('Dog component', () => {
  it('renders a Dog', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
