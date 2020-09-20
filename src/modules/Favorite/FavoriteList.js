import Grid from '@material-ui/core/Grid';
import { Progress } from 'components/index';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { FavoriteCard } from 'modules/Favorite/components';
import useStyles from 'modules/Favorite/styles';

const FavoriteList = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { items: favorites } = useSelector((state) => state.favorite);
    const isLoading = useSelector(({ loading }) => loading.models);

    const loadFavorite = useCallback(() => dispatch.favorite.fetch(), [dispatch.favorite]);

    useEffect(() => {
        loadFavorite();
    }, []);

    console.log('favorites: ', favorites);

    return (
        <Grid container spacing={3} direction="column" className={classes.root}>

            <Grid item>
                {/* eslint-disable-next-line no-nested-ternary */}
                {isLoading.favorite ? <div style={{ height: '100%' }}><Progress /></div>
                    : favorites.length > 0 ? (
                        <Grid container spacing={2} key={v4()}>
                            {favorites.map((d) => (
                                <FavoriteCard
                                    key={v4()}
                                    data={d}
                                    favorite={favorites.filter((fav) => fav.name === d.name)}
                                />
                            ))}
                        </Grid>
                    ) : <div>No Favorite</div>}
            </Grid>

        </Grid>
    );
};

export default FavoriteList;
