import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
const nasaAPIURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&camera=NAVCAM";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentDate: '',
        currentApiResponse: []
    },
    mutations: {
        setCurrentDate(state, theDate) {
            state.currentDate = theDate
        },

        setCurrentPhotos(state, currentPhotos) {
            state.currentApiResponse = currentPhotos
        }

    },
    actions: {

        getClickedDate({commit, dispatch}, payload) {
            commit('setCurrentDate', payload.clickedDate)
            dispatch('getPhotos')
        },

        getPhotos({commit}) {
            return axios
              .get(nasaAPIURL + "&earth_date=" + this.state.currentDate + "&api_key=" + process.env.VUE_APP_NASA_KEY)
              .then(response => {
                  
                commit('setCurrentPhotos', response.data)
              });
          }

    },
    getters: {
        getAllPhotos: state => state.currentApiResponse
    },
    
})
