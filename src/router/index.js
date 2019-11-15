import Vue from "vue";
import VueRouter from "vue-router";
import kind from "./kind"
import shouye from "./shouye";
Vue.use(VueRouter)


const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            redirect: "/shouye"
        },
        kind,
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
            path: "/fuli",
            name: "fuli",
            component: _ => import("@pages/fuli"),
            meta: {
                flag: false
            }
        },
        {
            path: "/cart",
            name: "cart",
            component: _ => import("@pages/cart"),
            meta: {
                flag: true,
                requiredAuth: true
            }
        },
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

router.beforeEach((to, from, next) => {
    if (to.path != "/login" && to.meta.requiredAuth) {
        if (localStorage.getItem("token")) {
            next()
        } else {
            next({
                name: "login", params: { to: to.path }
            })
        }
    } else {
        next()
    }
})

export default router;