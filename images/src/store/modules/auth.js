import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: state => !!state.token // !! returns boolean
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace('#', '')); // qs does string manipulation and converts str to an object
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
  },
  logout: ({ commit }) => {
    commit("setToken", null);
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default { state, getters, actions, mutations };