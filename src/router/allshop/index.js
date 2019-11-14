export default {
	path:"/allshop",
	component:_=>import("@pages/allshop"),
	name:"allshop",
	meta:{
		flag:false,
		requiredAuth:false,
	},
	children:[
		// {
		// 	path:"/allshop",
		// 	redirect:"/allshop/all_shop"
		// },
		{
			path:"all_shop",
			component:_=>("@component/all_shop"),
			name:"all_shop",
			meta:{
				flag:false,
				requiredAuth:false,
			},
		}
	]
}