import axios from "axios";
import router from "@/router";
import api from "../api"

export const state = {
    user: {}
}
export const actions = {
    async login ({commit}, user) {
        try {
            const {data} = await axios.post(api.login, user);
            commit("SET_USER", data)
            await router.push('/?page=1');
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
            const {data} = await axios.get(api.checkLogin);
            commit("SET_USER", data)
            next()
        } catch (error) {
            next('/login')
        }
    },
    async logout (){
        try{
            await axios.delete(api.logout);
            await router.push('/login');
        } catch (error){
            console.log(error)
        }
    }
}
export const mutations = {
    SET_USER (state, user) {
        state.user = user
    },
}