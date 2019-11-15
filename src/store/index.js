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
    incount(){
    	++state.count
    }
}



let getters = {
    
}

const store = new Vuex.Store({
    
})


export default store