import Grid from '@material-ui/core/Grid';
import collect from 'collect.js';
import { Progress } from 'components/index';
import debounce from 'lodash/debounce';
import SearchField from 'modules/University/components/SearchField';
import UniversityCard from 'modules/University/components/UniversityCard';
import useStyles from 'modules/University/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfiniteScroll } from 'react-simple-infinite-scroll';
import chunks from 'utils/helper';
import { v4 } from 'uuid';

const perPage = 25;

const UniversityList = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(false);
    const [filterBy, setFilterBy] = useState('name');
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
    const [hasNext, setHasNext] = useState(true);
    const { items, meta } = useSelector((state) => state.university);
    const { authenticated } = useSelector((state) => state.auth);
    const { items: favorites } = useSelector((state) => state.favorite);
    const isLoading = useSelector(({ loading }) => loading.models);

    const debounceSearch = useCallback(debounce(() => {
        if (!filterBy || !searchText) return;

        setData([]);
        setPage(1);
        dispatch.university.search({
            [filterBy]: searchText,
        });
    }, 750), [dispatch.university, searchText, filterBy]);

    const loadData = useCallback(() => dispatch.university.fetch(), [dispatch.university]);
    const loadFavorite = useCallback(() => dispatch.favorite.fetch(), [dispatch.favorite]);

    const loadNext = () => {
        setPage(page + 1);
        setFetching(true);
    };

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        if (authenticated) loadFavorite();
    }, [authenticated]);

    useEffect(() => {
        const collection = collect(items);

        function setPagination() {
            const results = collection.forPage(page, perPage)
                .toArray();

            setData((current) => [...current, ...results]);
        }

        setHasNext(perPage * page < meta.totalItem);
        setPagination();
        setFetching(false);
    }, [page, items]);

    useEffect(() => debounceSearch(), [filterBy, searchText]);

    const handleFieldChange = debounce((e) => setSearchText(e), 750);

    const handleFilterChange = debounce((e) => setFilterBy(e.target.value), 750);

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item md={12} xs={12}>
                <SearchField onFieldChange={handleFieldChange} onFilterChange={handleFilterChange} />
            </Grid>

            <Grid item md={12} xs={12}>
                {isLoading.university ? (
                    <div style={{
                        height: '100%',
                        width: '100%',
                    }}
                    >
                        <Progress />
                    </div>
                )
                    : (
                        <InfiniteScroll
                            throttle={100}
                            threshold={300}
                            isLoading={fetching}
                            loader={<Progress />}
                            hasMore={hasNext}
                            onLoadMore={loadNext}
                        >
                            {chunks(data, 3)
                                .map((ch) => (
                                    <Grid container spacing={2} key={v4()}>
                                        {ch.map((d) => (
                                            <UniversityCard
                                                key={v4()}
                                                data={d}
                                                favorite={favorites.filter((fav) => fav.name === d.name)}
                                            />
                                        ))}
                                    </Grid>
                                ))}
                        </InfiniteScroll>
                    )}
            </Grid>

        </Grid>
    );
};

export default UniversityList;
