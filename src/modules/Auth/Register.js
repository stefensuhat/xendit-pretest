import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { LoadingButton } from 'components';
import FormWithAlert from 'components/FormWithAlert';
import { Field, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import BaseAuth from 'modules/Auth/BaseAuth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginPath } from 'utils/routeConstant';
import useStyles from './styles';
import validationSchema from './validations';

const SignIn = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();
    const { authenticated, errors } = useSelector((state) => state.auth);

    useEffect(() => {
        if (authenticated) {
            navigate('/');
        }
    }, [authenticated]);

    const onSubmit = (data, { setSubmitting }) => {
        console.log('data: ', data);

        dispatch.auth.register(data);

        setSubmitting(false);
    };

    return (
        <BaseAuth>

            <Formik
                initialValues={{
                    email: process.env.NODE_ENV === 'development' ? 'stefensuhat@gmail.com' : '',
                    password: process.env.NODE_ENV === 'development' ? 'password' : '',
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Box className={classes.form}>
                        <FormWithAlert errors={errors}>
                            <Typography className={classes.title} gutterBottom variant="h2">
                                Register
                            </Typography>

                            <Box display="flex" alignItems="center" mb={2}>
                                <Typography variant="h4">
                                    <Box mr={1}>
                                        Already have account?
                                    </Box>
                                </Typography>

                                <Button
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                    onClick={() => navigate(loginPath)}
                                >
                                    <Box fontWeight={600}>
                                        Log In
                                    </Box>
                                </Button>
                            </Box>

                            <Field
                                component={TextField}
                                name="device"
                                type="hidden"
                            />

                            <Field
                                component={TextField}
                                name="email"
                                type="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                            />

                            <Field
                                component={TextField}
                                type="password"
                                label="Password"
                                name="password"
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                            />
                            <LoadingButton
                                className={classes.signInButton}
                                color="primary"
                                loading={isSubmitting}
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Register
                            </LoadingButton>
                        </FormWithAlert>
                    </Box>
                )}
            </Formik>
        </BaseAuth>
    );
};

SignIn.propTypes = {};

export default SignIn;
