import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const authStore = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token'),
        user: {}
    },
    getters,
    mutations,
    actions
}