export default {
	path:"/login",
	component:_=>import("@pages/login"),
	name:"login",
	meta:{
		flag:false,
		requiredAuth:false,
	}
}