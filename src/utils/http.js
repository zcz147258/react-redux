import axios from 'axios'
import QS from 'qs'
import { message } from 'antd';

axios.defaults.timeout = 50000 //设置接口响应时间
axios.defaults.baseURL = 'http://rap2.taobao.org:38080/app/mock/256761/api/v1' // 这是调用数据接口,公共接口url+调用接口名
axios.defaults.withCredentials= true;
axios.interceptors.request.use(
    //config包含每次请求的信息
    config => {
        //拿请求路径
        //console.log('请求路径', config.url)
        //去缓存中拿token
        // let token = store.state.token;  //从缓存中取token
        //有token
        // if (token) {
        //     // config.headers.Authorization = token;    //将token放到请求头发送给服务器
        // } else {
        //     //localStorage.clear();  //清空缓存
        //     //排除login请求接口
        //     if (router.currentRoute.name && router.currentRoute.name.toLowerCase() == "login") {

        //     } else {
        //         //否则 全部返回null
        //     }
        // }
        // console.log('请求的操作'+ JSON.stringify(config))
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
// http response 拦截器
axios.interceptors.response.use(
    response => {
      // console.log('相应'+ JSON.stringify(response))
      if(response.status === 200){

      }else{
        message.error('相应不正常');
      }
        return response; //请求成功的时候返回的data
    },
    error => {
        try {
            return Promise.reject(error.response.data)
        }
        catch (e) {
        }
    }
)
// 封装axios的get请求
export function getData(url, params,end) {
    return new Promise((resolve, reject) => {
      axios.get(url, {params:params}).then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        }).finally(end);
    });
  }
  // 封装axios的post请求
  export function postData(url, params,end) {
    return new Promise((resolve, reject) => {
      axios.post(url, QS.stringify(params)).then(response => {
          console.log(response)
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        }).finally(end);
    });
  }
  export function Postdownload(url, params,responsetype,end) {
    return new Promise((resolve, reject) => {
      //{responseType:'blob'}
      axios.post(url, QS.stringify(params)).then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        }).finally(end);
    });
  }
export default axios