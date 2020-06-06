import { createStore,applyMiddleware,compose } from 'redux'
//引入reducer
import reducer from './reducer'
//配置中间件thunk
import thunk from 'redux-thunk'
//创建了一个仓库
//然后注入reducer
//解决兼容问题
//引入saga
// import createSagaMiddleware from 'redux-saga'
// const sagaMiddleWare = createSagaMiddleware();
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhances(applyMiddleware(thunk))
const store = createStore(
    reducer,
    enhancer
    // applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
export default store