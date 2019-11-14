export default {
	path:"/register",
	component:_=>import("@pages/register"),
	name:"register",
	meta:{
		flag:false,
		requiredAuth:false,
	}
}