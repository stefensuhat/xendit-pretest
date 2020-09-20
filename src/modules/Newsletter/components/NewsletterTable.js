import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Progress } from 'components/index';
import MUIDataTable, { debounceSearchRender } from 'mui-datatables';
import PropTypes from 'prop-types';
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector } from 'react-redux';

const propTypes = {
    items: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
    actions: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const NewsletterTable = ({
    items, meta, onFilterChange,
}) => {
    const classes = useStyles();
    const { effects: { newsletter } } = useSelector((state) => state.loading);

    const columns = [
        { name: 'id', options: { display: false } },
        { name: 'email', label: 'Email' },
    ];

    return (
        <Paper>
            <PerfectScrollbar>
                <div>
                    {newsletter.fetch && items.length < 1 ? <Progress />
                        : (
                            <MUIDataTable
                                title="Newsletter List"
                                data={items}
                                columns={columns}
                                options={{
                                    print: false,
                                    filter: false,
                                    download: false,
                                    viewColumns: false,
                                    serverSide: true,
                                    selectableRowsHideCheckboxes: true,
                                    customSearchRender: debounceSearchRender(750),
                                    page: meta.current_page - 1,
                                    count: meta.total,
                                    rowsPerPage: parseInt(meta.per_page, 10),
                                    rowsPerPageOptions: [15, 25, 50],
                                    onTableChange: (action, tableState) => {
                                        switch (action) {
                                        case 'changePage':
                                            onFilterChange({ page: tableState.page + 1 });
                                            break;
                                        case 'changeRowsPerPage':
                                            onFilterChange({ count: tableState.rowsPerPage });
                                            break;
                                        case 'search':
                                            onFilterChange({ search: tableState.searchText });
                                            break;
                                        default:
                                            console.info(action, tableState);
                                            break;
                                        }
                                    },
                                }}
                            />
                        )}
                </div>
            </PerfectScrollbar>
        </Paper>
    );
};

NewsletterTable.propTypes = propTypes;

export default NewsletterTable;
