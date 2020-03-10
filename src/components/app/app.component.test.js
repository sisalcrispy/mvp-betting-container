import { shallow } from 'enzyme';
import React from 'react';
import App from './app.component';

const wrapper = shallow(<App />);

describe('AppComponent component', () => {
  it('renders learn react link', () => {
    expect(wrapper.find('.App-link')).toHaveLength(1);
  });
});
