import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//开启国际化功能
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
//引入css
import './css/index.less'
//开启router
//引入 react-redux
import { Provider } from 'react-redux'
//引入store
import store from './store'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { commonRoutes,privateRoutes } from "./routers";
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router>
      {/* 路由映射表 */}
      <Switch>
        {commonRoutes.map((item, index) => {
          //配置公共路由
          return (
            <Route
              key={index}
              path={item.pathname}
              component={item.component}
            ></Route>
          );
        })}
        {/* 配置私有路由 */}
        <Route path="/admin" render={(rootprops)=>{
            return (
              <Provider store={store}>
                  <App {...rootprops} />
              </Provider>
            )
        }}>
        </Route>
         {/* 配置404和默认的/进入路由 */}
         <Redirect from="/" to="/admin" exact></Redirect>
          <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  </ConfigProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
