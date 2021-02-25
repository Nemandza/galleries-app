import Vue from 'vue'
import Vuex from 'vuex'
import { authStore } from "./auth";
import { galleriesStore } from "./galleries";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'auth': authStore,
    'galleries': galleriesStore
  }
})