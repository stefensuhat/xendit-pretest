import {
    Avatar, Box, Button, Card, CardActions, CardContent, Grid, IconButton, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoveIcon from '@material-ui/icons/Favorite';
import cogoToast from 'cogo-toast';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const propTypes = {
    data: PropTypes.shape.isRequired,
    favorite: PropTypes.array,
};
const defaultProps = { favorite: [] };

const useStyles = makeStyles((theme) => ({
    favorite: {
        color: 'red',
        transition: theme.transitions.create('color', {
            duration: theme.transitions.duration.standard,
        }),
    },
}));

function FavoriteCard({ data, favorite }) {
    const classes = useStyles();
    const { authenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    console.log('favorite: ', favorite);

    const handleNavigateDomain = (url) => {
        window.open(`http://www.${url}`, '_blank');
    };

    const handleFavoriteClick = (selectedData) => {
        if (!authenticated) {
            cogoToast.error('You need to login.');

            return false;
        }

        if (favorite.length > 0) {
            dispatch.favorite.delete(favorite[0].id);
        } else {
            dispatch.favorite.save(selectedData);
        }
    };

    return (
        <Grid item md={4} xs={12}>
            <Card>
                <CardContent>
                    <Box display="flex">
                        <Avatar>{data.name.charAt(0)}</Avatar>

                        <Box ml={1}>
                            <Typography variant="h5" component="h2">
                                {data.name}
                            </Typography>
                            <Typography color="textSecondary">
                                {`Country: ${data.country}`}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions>
                    {data.domains.map((domain) => (
                        <Button
                            key={domain}
                            size="small"
                            onClick={() => handleNavigateDomain(domain)}
                        >
                            {domain}
                        </Button>
                    ))}

                    <IconButton onClick={() => handleFavoriteClick({ name: data.name })}>
                        <LoveIcon className={favorite.length > 0 ? classes.favorite : ''} />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}

FavoriteCard.propTypes = propTypes;
FavoriteCard.defaultProps = defaultProps;

export default FavoriteCard;
