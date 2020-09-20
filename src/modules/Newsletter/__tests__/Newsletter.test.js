import Routes from 'components/Routes';
import { mount } from 'enzyme';
import React from 'react';
import App from 'App';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><App /></Root>);
});

it('Route is initialized', () => {
    expect(wrapped.find(Routes).length).toEqual(1);
});
