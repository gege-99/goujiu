import Vue from "vue";
import VueRouter from "vue-router";
import kind from "./kind"
Vue.use(VueRouter)


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/kind"
        },
        kind,
        {
            path:"/mine",
            name:"mine",
            component:_=>import("@pages/mine"),
            meta:{
                flag:true,
                
            }
        },
        {
            path:"/shouye",
            name:"shouye",
            component:_=>import("@pages/shouye"),
            meta:{
                flag:true
            }
        },
        {
            path:"/fuli",
            name:"fuli",
            component:_=>import("@pages/fuli"),
            meta:{
                flag:false
            }
        },
        {
            path:"/cart",
            name:"cart",
            component:_=>import("@pages/cart"),
            meta:{
                flag:true,
                requiredAuth:true
            }
        },
        {
            path:"/login",
            name:"login",
            component:_=>import("@pages/login"),
            meta:{
                flag:false
            }
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path !="/login" &&to.meta.requiredAuth){
        if(localStorage.getItem("token")){
            next()
        }else{
            next({
                name:"login",params:{to:to.path}
            })
        }
    }else{
        next()
    }
})

export default router;