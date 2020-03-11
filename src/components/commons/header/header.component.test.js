import { shallow } from 'enzyme';
import React from 'react';
import Header from './header.component';

const wrapper = shallow(<Header />);

describe('Header component', () => {
  it('renders the title', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
