import http from "@utils/request"

export const searchApi=(str)=>http({
	method:"get",
	url:"/BtCApi/Search/GetSearch?sort=0&PageIndex=1&PageSize=20&userID=0",
	data:{
		str:str
	}
})




