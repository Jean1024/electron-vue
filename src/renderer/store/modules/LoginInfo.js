import { fetchJSON } from "../../tools";
import URL from "../url"
const ipc = require('electron').ipcRenderer;
const state = {
    info: ''
  }
  
const mutations = {
    SAVE (state,list) {
        state.info = list
    }
}

const actions = {
    signin({ commit},user) {
        let params = {
            username: user.username,
            password: user.password,
            appid: 27
        }
        fetchJSON(URL.SIGN_IN,params)
        .then(data=>{
            if(data.status == 1){
                commit('SAVE',data)
                ipc.send('menus_show')
                location.replace('#/menus')
            }else{
                alert(data.msg)
            }
        })
    }
}

export default {
    state,
    mutations,
    actions
}