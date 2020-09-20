import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import SubHeader from 'components/layouts/Main/components/Topbar/SubHeader';
import PropTypes from 'prop-types';
import React from 'react';

import { Footer, Topbar } from './components';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.mixins.toolbar.minHeight,
        height: '100%',
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64,
            height: '100%',
        },
    },
    shiftContent: {
        paddingLeft: 240,
    },
    content: {
        height: '100%',
        marginTop: theme.mixins.toolbar.minHeight + 24,
    },
}));

const Main = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <div
            className={clsx({
                [classes.root]: true,
                // [classes.shiftContent]: isDesktop,
            })}
        >
            <div>
                <Topbar />
                <SubHeader />
            </div>
            <Container maxWidth="lg" disableGutters className={classes.content}>
                {children}
                <Footer />
            </Container>
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
