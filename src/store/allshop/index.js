import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
 
let state = {
   count:1
}


let actions = {
   
}


let mutations = {
    
}



let getters = {
    completedCountChange(state){
        return state.count * 2 +'位';
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})


export default store