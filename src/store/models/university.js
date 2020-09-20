import axios from 'axios';

const searchUrl = 'http://universities.hipolabs.com/search';

const defaultState = {
    items: [],
    prevItems: [],
    nextItems: [],
    meta: {
        totalItem: 0,
    },
};

const model = {
    state: defaultState,
    reducers: {
        fetchResponse(state, payload) {
            return {
                ...state,
                items: [...state.items, ...payload.data],
                meta: payload.meta,
            };
        },
        searchResponse: (state, payload) => ({
            ...state,
            items: payload.data,
        }),
    },
    effects: {
        async fetch() {
            await axios.get(searchUrl)
                .then(({ data }) => {
                    this.fetchResponse({
                        data,
                        meta: { totalItem: data.length },
                    });
                });
        },
        async search(filter) {
            await axios.get(searchUrl, { params: filter })
                .then((response) => {
                    const totalItem = response.data.length;

                    this.searchResponse({
                        data: response.data,
                        meta: {
                            totalItem,
                        },
                    });
                });
        },
    },
};

export default model;
