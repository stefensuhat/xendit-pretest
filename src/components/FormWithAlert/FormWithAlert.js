import Box from '@material-ui/core/Box';
import { Alert } from '@material-ui/lab';
import { Form } from 'formik';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    errors: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};
const defaultProps = { errors: {} };

function FormWithAlert({ errors, children }) {
    return (
        <Form>
            {get(errors, 'errorMessage') && (
                <Box mb={2}>
                    <Alert severity="error">
                        {errors.errorMessage}
                        <ul>
                            {Object.keys(errors)
                                .map((key) => {
                                    if (key === 'errorMessage') return true;
                                    return (
                                        <li>{errors[key]}</li>
                                    );
                                })}
                        </ul>
                    </Alert>
                </Box>
            )}

            {children}
        </Form>
    );
}

FormWithAlert.propTypes = propTypes;
FormWithAlert.defaultProps = defaultProps;

export default FormWithAlert;
