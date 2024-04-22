import { TOGGLE_LOADING } from "@/consts/mutation-types";

export default {
    namespaced: true,
    state: {
        loading: false
    },
    getters: {
        isLoading: state => state.loading
    },
    mutations: {
        [TOGGLE_LOADING](state) {
            state.loading = !state.loading;
        }
    },
}