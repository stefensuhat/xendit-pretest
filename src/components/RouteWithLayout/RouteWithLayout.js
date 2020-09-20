import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Route } from 'react-router-dom';

const RouteWithLayout = (props) => {
    const {
        layout: Layout, component: Component, requireAuth, title, ...rest
    } = props;
    const { authenticated: isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        if (!isAuthenticated && requireAuth) {
            // window.location.assign('/login');
        }

        dispatch.app.setTitle(title);
    }, [pathname, dispatch, isAuthenticated, title, requireAuth]);

    return (
        <Route
            {...rest}
            element={(
                <Layout>
                    <Component />
                </Layout>
            )}
        />
    );
};

RouteWithLayout.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string,
    title: PropTypes.string,
    requireAuth: PropTypes.bool,
};

RouteWithLayout.defaultProps = {
    title: '',
    requireAuth: true,
};

export default RouteWithLayout;
