import React, { Component } from "react";
//TODOLIST
//引入store
import store from "../../store";
//引入 actionstype 
import { CHANGE_INPUT,ADD_ITEM,DEL} from '../../store/actiontypes'
//引入 actioncreators
import { changeInputAction,addAction,delAction,getListAction,ToDoListAction } from '../../store/actioncreators'
//引入UI
import ToDoListUI from './ToDoListUI'

//引入连接器
import { connect } from 'react-redux'
//引入axios
// import { GetList } from '../../api'
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    //该白this指向
    // this.changeInputValue = this.changeInputValue.bind(this)
    //store 订阅
    store.subscribe(this.storeChange);
  }
  //订阅
  storeChange = () => {
    this.setState(store.getState);
  };
  //改变store的值
  changeInputValue = (e) => {
    const action = changeInputAction(e.target.value)
    store.dispatch(action);
  };
  //增加
  ClickBtn = () => {
    const action = addAction()
    store.dispatch(action);
  };
  //删除
  DelItem = (index) => {
    const action = delAction(index)
    store.dispatch(action);
  };
  componentDidMount(){
    // GetList().then((res)=>{
    //     const data = res
    //     const action = getListAction(data)
    //     store.dispatch(action)
    // })
    const action = ToDoListAction()
    store.dispatch(action)
  }
  render() {
    return (
      <ToDoListUI 
      inputValue = {this.state.inputValue}
      changeInputValue={this.changeInputValue}
      ClickBtn = {this.ClickBtn}
      list = {this.state.list}
      DelItem = {this.DelItem}
      />
    );
  }
}
//映射关系
// const stateprops = (state) =>{
//     return {
//         inputValue:state.inputValue
//     }
// }
// //派发
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeInputValue: (e) => {
//             let action = {
//                 type:'change_input',
//                 value:e.target.value
//             }
//             dispatch(action)
//         }
//     }
// }
export default Setting;
// export default connect(stateprops,mapDispatchToProps)(Setting)
