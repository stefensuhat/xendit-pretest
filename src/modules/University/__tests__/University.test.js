import { mount } from 'enzyme';
import { University } from 'modules';
import React from 'react';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><University /></Root>);
});

it('Route is initialized', () => {
    expect(wrapped.find(University).length).toEqual(1);
});
