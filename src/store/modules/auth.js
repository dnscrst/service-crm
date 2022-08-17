import axios from "axios";
import router from "@/router";

export const state = {
    user: {}
}
export const actions = {
    async login ({commit}, user) {
        try {
            const {data} = await axios.post('/api/auth/login', user);
            commit("SET_USER", data)
            await router.push('/');
        } catch (error) {
            console.log(error);
        }
    },
    async check_login ({commit}, next) {
        try {
            if (state.user.name) {
                next()
                return
            }
            const {data} = await axios.get('/api/auth/check-login');
            commit("SET_USER", data)
            data.name ?next() : next('/login')
            // next()
        } catch (error) {
            next('/login')
        }
    }
}
export const mutations = {
    SET_USER (state, user) {
        state.user = user
    }
}