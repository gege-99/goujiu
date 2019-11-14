import http from "@utils/request"


export const allshopApi=(n)=>http({
	method:"get",
	url:"/BtCApi/List/GetSeriesListALL?",
	data:{
		ParentID:"n"
	}
})

