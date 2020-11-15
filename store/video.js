import Vue from "vue";
import api from "@/store/api";

export const state = () => ({
    streamURL: null
})

export const mutations = {
    SET_STREAM(state, data) {
        Vue.set(state, "streamURL", data);
    },
}

export const actions = {
    fetchStream({commit}) {
        let result = { 
            "connect" : "https://cph-msl.akamaized.net/dash/live/2003285/test/manifest.mpd"
        }
        commit('SET_STREAM', result.connect);

        return result.connect
    }
}