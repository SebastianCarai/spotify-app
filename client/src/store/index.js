import { createStore } from 'vuex'
import spotify from '../spotify'

export default createStore({
  state: {
    spotify: spotify,
    userName: null,
    profilePicture: null,
    activePlaylist: null,
    currentSong: null
  },
  mutations: {
    setActivePlaylist(state, clickedPlaylist){
      state.activePlaylist = clickedPlaylist
    },
    setUserName(state, loggedUserName){
      state.userName = loggedUserName
    },
    setProfilePicture(state, profilePicture){
      state.profilePicture = profilePicture
    }
  },
  actions: {
  },
  modules: {
  }
})
