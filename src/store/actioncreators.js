import { CHANGE_INPUT,ADD_ITEM,DEL,GetList} from './actiontypes'
//中间件 
import { GetToDoList } from '../api'
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addAction = () => ({
    type: ADD_ITEM
})
export const delAction = (index) => ({
    type: DEL,
    index
})
export const getListAction = (data) => ({
    type: GetList,
    data
})
export const ToDoListAction = () =>{
    return (dispatch) => {
        GetToDoList().then((res)=>{
            const data = res
            const action = getListAction(res)
            dispatch(action)
        })
    }
}

