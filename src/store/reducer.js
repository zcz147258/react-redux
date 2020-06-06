//引入actiontype
import { CHANGE_INPUT,ADD_ITEM,DEL,GetList} from './actiontypes'
//reducer
const defaultState = {
    inputValue:'Write Someting',
    list:[]
}
//设置默认值
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT){
        //深度拷贝
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue= action.value
        return newState
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        if(newState.inputValue !=''){
            var obj = {}
            obj.list = newState.inputValue
             newState.list.push(obj)
             newState.inputValue = ''
        }
        return newState
    }
    if(action.type === DEL){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type === GetList){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.result
        return newState
    }
    return state
}