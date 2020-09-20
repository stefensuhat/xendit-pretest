import axios from 'axios';
import cogoToast from 'cogo-toast';

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
        fetch(filter, rootState) {
            const userId = rootState.auth.profile.id;
            axios.get(`${baseUrl}/favorites`, { params: { userId_like: userId } })
                .then(({ data }) => {
                    this.fetchResponse({
                        data,
                    });
                });
        },
        save(formData, rootState) {
            const userId = rootState.auth.profile.id;

            axios.post(`${baseUrl}/favorites`, {
                ...formData,
                userId,
            })
                .then((response) => {
                    this.fetch();
                })
                .catch(() => cogoToast.error('Marked Failed.'));
        },
        delete(selectedId) {
            axios.delete(`${baseUrl}/favorites/${selectedId}`)
                .then((response) => {
                    this.fetch();
                })
                .catch(() => cogoToast.error('Marked Failed.'));
        },
    },
};

export default model;
