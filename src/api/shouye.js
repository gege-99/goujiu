import http from "@utils/request";

export const miaosha = (userid) => http({
    method: "get",
    url: "/BtCApi/Home/SeckillList?",
    data: {
        // data
        userid: userid
    }
})

export const nae =(pagesize)=>http({
    method:"get",
    url:"/BtCApi/Home/GethomeProductByhot?seriesid=0&pageindex=1&",
    data:{
        pagesize:pagesize
    }
})

export const bainae =(pagesize)=>http({
    method:"get",
    url:"/BtCApi/Home/GethomeProductByhot?seriesid=1&pageindex=2&",
    data:{
        pagesize:pagesize
    }
})

export const putao =(pagesize)=>http({
    method:"get",
    url:"/BtCApi/Home/GethomeProductByhot?seriesid=2&pageindex=1&",
    data:{
        pagesize:pagesize
    }
})

export const qingyang =(pagesize)=>http({
    method:"get",
    url:"/BtCApi/Home/GethomeProductByhot?seriesid=4,1435&pageindex=1&",
    data:{
        pagesize:pagesize
    }
})

export const huangpi =(pagesize)=>http({
    method:"get",
    url:"/BtCApi/Home/GethomeProductByhot?seriesid=5,6&pageindex=1&",
    data:{
        pagesize:pagesize
    }
})

export const laojiu =(pagesize)=>http({
    method:"get",
    url:"/BtCApi/Home/GethomeProductByhot?seriesid=7&pageindex=1&",
    data:{
        pagesize:pagesize
    }
})
// export const putao =()=>http({
//     method:"get",
//     url:"/BtCApi/Home/GetHomePageImg",
//     data:{
//     }
// })

// http://m.gjw.com/BtCApi/Home/SeckillList?userid=0
// /BtCApi/Home/GethomeProductByhot?seriesid=0&pageindex=1&pagesize=20
// /BtCApi/Home/GethomeProductByhot?seriesid=1&pageindex=2&pagesize=20
// http://m.gjw.com/BtCApi/Home/GethomeProductByhot?seriesid=4,1435&pageindex=1&pagesize=20