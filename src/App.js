import React, { Component } from "react";
import { Button, Pagination } from "antd";
//开启路由
import { privateRoutes } from "./routers";
import { Route, Switch, Redirect } from "react-router-dom";
import  LayOut  from "./components/FrameOut";
// import './App.css'
//引入css
import 'antd/dist/antd.css'
class App extends Component {
  constructor(props){
    super(props)
    //监听地址栏变化
    this.props.history.listen((location)=>{
        var pathname = location.pathname;
        var one = privateRoutes.find(item =>{
          return item.pathname == pathname;
        })
        document.title = one && one.title;
    })
  }
  render(){
    return (
      <LayOut>
        <Switch>
          {privateRoutes.map((item) => {
            return (
              <Route
                key={item.pathname}
                path={item.pathname}
                render={(rootprops) => {
                  //权限检测
                  var ShowComponent = item.component;
                  return <ShowComponent {...rootprops} />;
                }}
              ></Route>
            );
          })}
          {/* 配置默认和404访问 */}
          <Redirect from="/admin" to="/admin/dashboard" exact></Redirect>
          <Redirect to="/404"></Redirect>
        </Switch>
      </LayOut>
    );
  }
}

export default App;
