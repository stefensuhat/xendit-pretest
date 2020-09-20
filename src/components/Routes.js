import { RouteWithLayout } from 'components';
import { Login as LoginView, NotFound as NotFoundView, Register as RegisterView } from 'modules';
import React from 'react';
import { Routes as RouterRoutes } from 'react-router-dom';
import { routeLists } from 'utils';
import { Minimal as MinimalLayout } from './layouts';

const minimumProps = {
    exact: true,
    requireAuth: false,
    layout: MinimalLayout,
};
const Routes = () => (
    <RouterRoutes>
        {routeLists.map(({ nav, ...item }) => <RouteWithLayout key={item.path} {...item} />)}

        <RouteWithLayout
            {...minimumProps}
            component={<div />}
            path="/verify/token"
        />
        <RouteWithLayout
            {...minimumProps}
            component={LoginView}
            path="/auth/login"
        />
        <RouteWithLayout
            {...minimumProps}
            component={RegisterView}
            path="/auth/register"
        />
        <RouteWithLayout
            component={NotFoundView}
            exact
            layout={MinimalLayout}
            path="*"
        />
    </RouterRoutes>
);

export default Routes;
