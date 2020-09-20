import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_ROOT;
const defaultState = {
    items: [],
    prevItems: [],
    nextItems: [],
    meta: {
        total: 0,
        current_page: 1,
        per_page: 15,
    },
};

const model = {
    state: defaultState,
    reducers: {
        fetchResponse(state, payload) {
            return {
                ...state,
                items: payload.data,
                meta: payload.meta,
            };
        },
    },
    effects: {
        async fetch(filter) {
            const { page, count, search } = filter;

            await axios.get(`${baseUrl}/newsletter`, {
                params: {
                    _page: page,
                    _count: count,
                    user_id_like: search,
                },
            })
                .then(({ data }) => {
                    this.fetchResponse({
                        data,
                        meta: {
                            total: data.length,
                            per_page: count,
                            current_page: 1,
                        },
                    });
                });
        },
    },
};

export default model;
