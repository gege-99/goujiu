import http from "@utils/request";


export const xq = (Id) => http({
    method: "post",
    url: "/BtCApi/Item/GetProduct",
    data: {
        Id: Id,
    }
})
 export const pj=(proid)=>http({
     method:"get",
     url:"/BtCApi/Item/GetComment?pageindex=1&pagesize=5&score=0&",
     data:{
         proid:proid
     }
 
    })