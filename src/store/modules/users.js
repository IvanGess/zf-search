import { fetchUsersApi } from "@/api/users";
import {
    INCREMENT_PAGE,
    LOADER_TOGGLE_LOADING,
    RESET_CURRENT_PAGE,
    RESET_DATA_LOADED,
    RESET_SEARCH,
    SET_ACTIVE_USER,
    SET_SEARCH_TERMS,
    SET_USERS
} from "@/consts/mutation-types";
import { fetchUsers, loadMoreUsers, snackbar_showSnackbar } from "@/consts/action-types";
import {firstPage, itemsPerPage} from "@/consts/common";

export default {
    state: {
        users: [],
        activeUser: null,
        searchInitiated: false,
        currentPage: firstPage,
        perPage: itemsPerPage,
        allDataLoaded: false,
        searchTerms: null
    },
    getters: {
        users: state => state.users,
        activeUser: state => state.activeUser,
        searchInitiated: state => state.searchInitiated,
    },
    mutations: {
        [SET_USERS](state, users) {
            state.users = state.currentPage === firstPage ? users : [...state.users, ...users];
            state.searchInitiated = true;
            if (!state.users.map(user => user.id).includes(state.activeUser?.id)) {
                state.activeUser = null;
            }
            if (users.length < state.perPage) {
                state.allDataLoaded = true;
            }

        },
        [RESET_DATA_LOADED](state) {
            state.allDataLoaded = false;
        },
        [SET_ACTIVE_USER](state, user) {
            state.activeUser = user;
        },
        [RESET_SEARCH](state) {
            state.searchInitiated = false;
            state.users = [];
            state.activeUser = null;
            state.currentPage = firstPage;
            state.allDataLoaded = true;
        },
        [INCREMENT_PAGE](state) {
            state.currentPage++;
        },
        [RESET_CURRENT_PAGE](state) {
            state.currentPage = firstPage;
        },
        [SET_SEARCH_TERMS](state, terms) {
            state.searchTerms = terms;
        },
    },
    actions: {
        async [fetchUsers]({ commit, dispatch, state }, searchTerms) {
            commit(LOADER_TOGGLE_LOADING, true, { root: true });
            commit(SET_SEARCH_TERMS, searchTerms);

            fetchUsersApi(searchTerms, state.currentPage, state.perPage)
                .then(users => {
                    commit(SET_USERS, users);
                })
                .catch(error => {
                    console.error('Ошибка при получении пользователей:', error);
                    dispatch(snackbar_showSnackbar, { message: `Ошибка: ${error.toString()}`, color: 'error' });
                })
                .finally(() => {
                    commit(LOADER_TOGGLE_LOADING, false, { root: true });
                });
        },
        [loadMoreUsers]({ dispatch, commit, state }) {
            if (!state.allDataLoaded) {
                commit(INCREMENT_PAGE);
                dispatch(fetchUsers, state.searchTerms);
            }
        }
    }
}
