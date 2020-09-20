import { ThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';
import theme from 'theme';

const propTypes = { children: PropTypes.node.isRequired };
const defaultProps = {};

function Root({ children }) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

Root.propTypes = propTypes;
Root.defaultProps = defaultProps;

export default Root;
