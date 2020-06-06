import React, { Component } from "react";
//布局页面公共的页面部分
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Menu,
  Dropdown,
  Avatar,
  Badge,
} from "antd";
import { HomeOutlined, SettingFilled, UserOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
//兼容包
import { Icon } from "@ant-design/compatible";
import { privateRoutes } from "../../routers";
//规定只显示一级菜单
import { withRouter } from "react-router-dom";
//导入less
import style from "./index.less";
console.log(style)
var top = privateRoutes.filter((item, index) => {
  return (item.isTop = true);
});

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

@withRouter
class LayOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  menusHandler = ({ key }) => {
    console.log(key);
    this.props.history.push(key);
  };
   menu = ()=>{
     return(
      <Menu onClick={this.menusHandler}>
      <Menu.Item key="/admin/notify">
        <Badge dot>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            通知中心
          </a>
        </Badge>
      </Menu.Item>
      <Menu.Item key="/admin/setting">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          个人设置
        </a>
      </Menu.Item>
      <Menu.Item key="/login">
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          退出
        </a>
      </Menu.Item>
    </Menu>
     )
   }
  render() {
    return (
      <Layout style={{ minHeight: "100%" }}>
        <Header className="header">
          <Row>
            <Col span={8}>
              <h2 style={{ color: "white" }}>CMS管理系统</h2>
            </Col>
            <Col span={3} offset={13}>
              <Badge count={5}>
                <Dropdown overlay={this.menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    style={{ color: "white" }}
                  >
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    欢迎你xxxx! <DownOutlined />
                  </a>
                </Dropdown>
              </Badge>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              selectedKeys={this.props.location.pathname}
              onClick={this.menusHandler}
              style={{ height: "100%", borderRight: 0 }}
            >
              {console.log(this.props)}
              {top.map((item, index) => {
                return (
                  <Menu.Item key={item.pathname}>
                    {/* <SettingFilled /> */}
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </Menu.Item>
                );
              })}
              {/* </SubMenu> */}
            </Menu>
          </Sider>
          <Layout style={{ padding: "24px" }}>
            {/* 面包屑 */}
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default LayOut;
