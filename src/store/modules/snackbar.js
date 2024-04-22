import { SET_SNACKBAR } from "@/consts/mutation-types";
import { showSnackbar } from "@/consts/action-types";

import {snackbarDelay} from "@/consts/common";

export default {
    namespaced: true,
    state: {
        snackbar: {
            show: false,
            message: '',
            color: ''
        }
    },
    getters: {
        snackbar: state => state.snackbar,
    },
    mutations: {
        [SET_SNACKBAR](state, payload) {
            state.snackbar = { ...state.snackbar, ...payload };
        }
    },
    actions: {
        [showSnackbar]({ commit }, { message, color = 'success' }) {
            commit(SET_SNACKBAR, { show: true, message, color });
            setTimeout(() => {
                commit(SET_SNACKBAR, { show: false, message: '', color: '' });
            }, snackbarDelay);
        }
    }
};
