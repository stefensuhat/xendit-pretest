import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Fade from 'react-reveal/Fade';
import useStyles from './styles';

const propTypes = { children: PropTypes.node.isRequired };
const defaultProps = {};

function BaseAuth({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container>
                <Grid className={classes.quoteContainer} item lg={5}>
                    <div className={classes.quote}>
                        <div className={classes.quoteInner}>
                            <Typography
                                className={classes.quoteText}
                                variant="h1"
                            >
                                Xendit Pre-test
                            </Typography>
                            <div className={classes.person}>
                                <Typography
                                    className={classes.name}
                                    variant="subtitle1"
                                >
                                    Stefen Suhat
                                </Typography>

                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid className={classes.content} item lg={7} xs={12}>
                    <div className={classes.content}>
                        <div className={classes.contentBody}>
                            <Fade>
                                {children}
                            </Fade>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

BaseAuth.propTypes = propTypes;
BaseAuth.defaultProps = defaultProps;

export default BaseAuth;
