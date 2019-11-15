export default {
	path:"/detailed",
	component:_=>import("@pages/detailed"),
	name:"detailed",
	meta:{
		flag:true,
		requiredAuth:false,
	}
}