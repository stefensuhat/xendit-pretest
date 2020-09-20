import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logo from 'images/logo--white.svg';

const useStyles = makeStyles(() => ({
    root: {
        boxShadow: 'none',
    },
}));

const Topbar = (props) => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <AppBar
            {...rest}
            className={clsx(classes.root, className)}
            color="primary"
            position="fixed"
        >
            <Toolbar>
                <RouterLink to="/">
                    <img
                        alt="Logo"
                        src={logo}
                        width={150}
                    />
                </RouterLink>
            </Toolbar>
        </AppBar>
    );
};

Topbar.propTypes = {
    className: PropTypes.string,
};

export default Topbar;
