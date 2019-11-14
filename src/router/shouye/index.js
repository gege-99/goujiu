export default {

    path: "/shouye",
    name: "shouye",
    component: _ => import("@pages/shouye"),
    meta: {
        flag: true,
        requiredAuth:false,
    },
    children:[
        {
            path:"/shouye",
            redirect:"/shouye/jingxuan"
        },
        {
            path:"jingxuan",
            component:_=>import("@components/jingxuan"),
            name:"jingxuan",
            meta: {
                flag: true,

            }
        },
        {
            path:"baijiu",
            component:_=>import("@components/baijiu"),
            name:"baijiu",
            meta: {
                flag: true,

            }
        },
        {
            path:"putao",
            component:_=>import("@components/putao"),
            name:"putao",
            meta: {
                flag: true,

            }
        },
        {
            path:"qingyang",
            component:_=>import("@components/qingyang"),
            name:"qingyang",
            meta: {
                flag: true,

            }
        },
        {
            path:"huangpi",
            component:_=>import("@components/huangpi"),
            name:"huangpi",
            meta: {
                flag: true,

            }
        },
        {
            path:"laojiu",
            component:_=>import("@components/laojiu"),
            name:"laojiu",
            meta: {
                flag: true,

            }
        }
    ]
}