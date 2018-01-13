const modal=weex.requireModule('modal')

//实例化stream模块对象
const stream=weex.requireModule('stream')

import axios from 'axios';

//封装模块，使用方式
export const appRequire={
    get(apiUrl,header,callback){
        return stream.fetch({
            method:'GET',
            type:'json',
            headers:header,
            url:apiUrl
        },callback)
    },
    post(apiUrl,sentData,header,callback){

        return stream.fetch({
            method:'POST',
            type:'json',
            headers:headers,
            body:sentData,
            url:apiUrl
        },callback)
    },
    postText(apiUrl,sentData,header,callback){
        return stream.fetch({
            method:'POST',
            type:'text',
            headers:header,
            body:sentData,
            url:apiUrl
        },callback)
    }
}

export const myAxios={
    get(apiUrl,header,callback){
        axios.get(apiUrl,{headers:header}).then(callback)
    },
    post(apiUrl,sentData,header,callback){
        axios.post(apiUrl,sentData,{headers:header}).then(callback)
    },
    postText(apiUrl,sentData,header,callback){
        axios({
            url:apiUrl,
            method:'post',
            data:sentData,
            transformRequest:[function(sentData){
                let ret=sentData
                return　ret
            }],
            headers:header
        }).then(callback)
    }
}

