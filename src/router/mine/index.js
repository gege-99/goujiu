export default {
	path:"/mine",
	component:_=>import("@pages/mine"),
	name:"mine",
	meta:{
		flag:true,
		requiredAuth:false,
	}
}