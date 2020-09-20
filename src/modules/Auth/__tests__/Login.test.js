import { mount } from 'enzyme';
import Login from 'modules/Auth/Login';
import React from 'react';
import Root from 'Root';

describe('Form Login', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = mount(<Root><Login /></Root>);
    });

    it('should render without errors', () => {
        expect(wrapped);
    });
});
