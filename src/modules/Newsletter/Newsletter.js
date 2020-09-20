import useStyles from 'modules/Newsletter/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewsletterTable } from './components';

const Newsletter = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({
        count: 15,
        page: 1,
    });
    const { items, meta } = useSelector((state) => state.newsletter);

    const loadData = useCallback(
        () => {
            dispatch.newsletter.fetch(filter);
        }, [dispatch.newsletter, filter],
    );

    useEffect(() => loadData(), [loadData, filter]);

    return (
        <div className={classes.root}>
            <NewsletterTable
                items={items}
                meta={meta}
                onFilterChange={(params) => {
                    setFilter((current) => ({ ...current, ...params }));
                }}
            />
        </div>
    );
};

export default Newsletter;
