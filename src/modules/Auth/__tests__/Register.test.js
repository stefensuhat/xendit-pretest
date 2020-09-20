import { mount } from 'enzyme';
import { Register } from 'modules/Auth';
import React from 'react';
import Root from 'Root';

describe('Form Register', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = mount(<Root><Register /></Root>);
    });

    it('should render without errors', () => {
        expect(wrapped);
    });
});
