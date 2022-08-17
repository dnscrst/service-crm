import axios from "axios";
import router from "@/router";

export const state = {
    service: {name: "auto"}
}
export const actions = {
    async getData ({commit}, service) {
        try {
            const {data} = await axios.post('/api/services', service);
            commit("SET_SERVICE", data)
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
}
export const mutations = {
    SET_SERVICE (state, service) {
        state.service = service
   }
}