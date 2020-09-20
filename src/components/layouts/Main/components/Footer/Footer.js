import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        // position: 'fixed',
        // bottom: 0,
        padding: theme.spacing(4),
    },
}));

const Footer = (props) => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Typography variant="body1">
                &copy;
                {' '}
                <Link
                    component="a"
                    href="#"
                    target="_blank"
                >
                    Xendit Pre Test
                </Link>
                . 2020
            </Typography>
            <Typography variant="caption">
                Created with love.
            </Typography>
        </div>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
