import Vue from "vue";
import VueRouter from "vue-router";
import kind from "./kind"
import shouye from "./shouye";
import search from "./search";
import shopcar from "./shopcar";
import mine from "./mine";
import searchin from "./search-in"
import set from "./set"
import newshop from "./newshop"
import allshop from "./allshop"
import phoneload from "./phoneload"
import register from "./register"
Vue.use(VueRouter)


const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            redirect: "/shouye"
        },
        kind,
        search,
        searchin,
        shopcar,
        mine,
        set,
        newshop,
        allshop,
        register,
        phoneload,
        {
            path:"/welfare-in",
            name:"welfare-in",
            meta:{
                flag:false,
                requiredAuth:true,
            },
            component:_=>import("@pages/welfare-in"),
        },
        {
            path: "/mine",
            name: "mine",
            component: _ => import("@pages/mine"),
            meta: {
                flag: true,

            }
        },
        shouye,
        
        
        {
            path: "/login",
            name: "login",
            component: _ => import("@pages/login"),
            meta: {
                flag: false
            }
        },
        {
            path: "/detailed/:id",
            name: "detailed",
            component: _ => import("@pages/detailed"),
            meta: {
                flag: false
            },
            props:true
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.path != "/login" && to.meta.requiredAuth) {
//         if (localStorage.getItem("token")) {
//             next()
//         } else {
//             next({
//                 name: "login", params: { to: to.path }
//             })
//         }
//     } else {
//         next()
//     }
// })

export default router;