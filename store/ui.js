import Vue from 'vue'

export const state = () => ({
  hideChat: false,
});

export const mutations = {
  TOGGLE_CHAT(state){
    state.hideChat = !state.hideChat;
  }
}

export const getters = {
  isChatOpen: state => {
    state.isNavOpen
  }
}
