import { makeStyles } from '@material-ui/core/styles';
import { Progress } from 'components/index';
import Routes from 'components/Routes.js';
import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useSelector } from 'react-redux';
import './assets/scss/index.scss';

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
    },
}));

function App() {
    const { effects } = useSelector((state) => state.loading);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {effects.auth.verify ? <Progress size={24} />
                : (
                    <Routes />
                )}
        </div>
    );
}

export default App;
