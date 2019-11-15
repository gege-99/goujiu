import http from "@utils/request"

export const searchApi=()=>http({
	method:"get",
	url:"/BtCApi/List/GetSeriesList",
	data:{
		
	}
})




