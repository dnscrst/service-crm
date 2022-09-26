import axios from "axios";
import api from "@/store/api";
export const state = {
    service: {},
    loading: false
}
export const actions = {
    async data ({commit}, service) {
        try {
            commit('SET_SERVICE', {})
            commit('SET_LOADING', true)
            const {data} = await axios.post(api.services, service);
            commit('SET_SERVICE', data)
            commit('SET_LOADING', false)
        } catch (error) {
            console.log(error);
            commit('SET_LOADING', false);
        }
    },
    async updateData({commit}, {details, id}) {
        try{
        const {data} = await axios.put
        (`${api.update}/${id}`, {details})
            location.reload();
        } catch (error) {
            console.log(error);
        }
    }
}
export const mutations = {
    SET_SERVICE (state, service) {
        state.service = service
   },
   SET_LOADING (state, loading) {
        state.loading = loading
   }
}