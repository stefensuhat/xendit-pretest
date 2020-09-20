import { Box, Grid, InputAdornment, MenuItem, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Progress } from 'components/index';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

const propTypes = {
    onFieldChange: PropTypes.func.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};
const defaultProps = {};

const search = [
    {
        key: 'Name',
        value: 'name_contains',
    },
    {
        key: 'Country',
        value: 'country',
    },
    {
        key: 'Domain',
        value: 'domain',
    },
];

function SearchField({ onFieldChange, onFilterChange }) {
    const isLoading = useSelector(({ loading }) => loading.effects);

    return (
        <Grid container spacing={2} component={Box} my={2}>
            <Grid item md={2} xs={12}>
                <TextField
                    fullWidth
                    id="filter"
                    select
                    SelectProps={{
                        displayEmpty: false,
                    }}
                    label="Filter"
                    variant="filled"
                    value=""
                    onChange={onFilterChange}
                    placeholder="Choose Filter"
                >
                    {search.map(((row) => (
                        <MenuItem key={row.value} value={row.value}>{row.key}</MenuItem>
                    )))}
                </TextField>
            </Grid>
            <Grid item md={10} xs={12}>
                <TextField
                    fullWidth
                    variant="filled"
                    placeholder="Type to search"
                    onChange={(e) => onFieldChange(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {isLoading.university.search ? <Progress /> : <SearchIcon />}
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        </Grid>
    );
}

SearchField.propTypes = propTypes;
SearchField.defaultProps = defaultProps;

export default SearchField;
