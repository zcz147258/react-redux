//接口  http://rap2.taobao.org:38080/app/mock/256761/api/v1/article
import {getData,postData,Postdownload} from '../utils/http'
export function GetArticle(data={},end){
    return getData('/article',data,end)
}
export function GetToDoList(data={},end){
    return getData('/redux',data,end)
}