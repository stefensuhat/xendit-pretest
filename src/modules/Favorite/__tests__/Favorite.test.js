import { mount } from 'enzyme';
import { Newsletter } from 'modules';
import React from 'react';
import Root from 'Root';

describe('Newsletter', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = mount(<Root><Newsletter /></Root>);
    });

    it('should render without errors', () => {
        expect(wrapped);
    });
});
