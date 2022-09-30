import { createStore } from 'vuex'
import * as auth from "./modules/auth"
import * as data from "./modules/data"

export default createStore({
  state: {
    city: ['Alba', 'Arad', 'Arges', 'Bacau', 'Bihor', 'Bistrita-Nasaud',
      'Botosani', 'Braila', 'Brasov', 'Buzau', 'Calarasi', 'Caras-Severin',
      'Cluj', 'Constanta', 'Covasna', 'Dambovita', 'Dolj', 'Galati', 'Giurgiu',
      'Gorj', 'Harghita', 'Hunedoara', 'Ialomita', 'Iasi', 'Ilfov', 'Maramures',
      'Mehedinti', 'Mures', 'Neamt', 'Olt', 'Prahova', 'Salaj', 'Satu Mare', 'Sibiu',
      'Suceava', 'Teleorman', 'Timis', 'Tulcea', 'Vaslui', 'Valcea', 'Vrancea'],
  },
  getters: {
  },
  mutations: {
    },
  actions: {
  },
  modules: {
    auth,
    data
  }
})
