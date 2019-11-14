import axios from "axios";
import { promised } from "q";

const server =axios.create({
    timeout:5000,
    //baseUrl:""
    withCredentials:true
})


//请求拦截器
server.interceptors.request.use((config)=>{
    if(config.method == "get"){
        config.params={...config.data}
    }
    // return config
    //config.headers["content-type"]="applicetion/json"
    //config.headers["token"]=""
    return config;
}),(err)=>{
    return promise.reject(err)
}


//相应拦截
server.interceptors.response.use((res)=>{
    if(res.status ==200){
        return res.data
    }
}),(err)=>{
    return promise.reject(err)
}


export default server;