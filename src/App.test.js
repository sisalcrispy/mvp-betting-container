import { shallow} from 'enzyme';
import React from 'react';
import App from "./App";

const wrapper = shallow(<App/>);

describe('App component', () => {
    it('renders learn react link', () => {
        expect(wrapper.find('.App-link')).toHaveLength(1);
    });
});
