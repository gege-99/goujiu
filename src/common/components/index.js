import Vue from "vue";
import Bscroll from "./bscroll"

let componentMap=[
    Bscroll
]   


componentMap.forEach(item=>{
    Vue.component(item.name,item)
})