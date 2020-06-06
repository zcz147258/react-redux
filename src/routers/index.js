//存在两类路由  公共路由 和 私有路由
// import { 
//     Article,
//     Dashboard, 
//     NotFound, 
//     Setting, 
//     Login } 
//     from "../views";

//路由的懒加载
import Loadable from 'react-loadable';
import Loading from '../components/loading';
 
const Article = Loadable({
  loader: () => import('../views/Article/index'),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import('../views/NotFound'),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import('../views/Dashboard'),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import('../views/Login'),
  loading: Loading,
});
const Setting = Loadable({
  loader: () => import('../views/Setting'),
  loading: Loading,
});
const commonRoutes = [
  {
    pathname: "/login",
    component: Login,
  },
  {
    pathname: "/404",
    component: NotFound,
  },
];
const privateRoutes = [
  {
    pathname: "/admin/dashboard",
    component: Dashboard,
    title:'仪表盘',
    icon:'home',
    isTop:true //代表是一级菜单
  },
  {
    pathname: "/admin/article",
    component: Article,
    title:'文章管理',
    icon:'edit',
    isTop:true //代表是一级菜单
  },
  {
    pathname: "/admin/setting",
    component: Setting,
    title:'系统设置',
    icon:'setting',
    isTop:true //代表是一级菜单
  }
];
export{
    privateRoutes,
    commonRoutes
}
