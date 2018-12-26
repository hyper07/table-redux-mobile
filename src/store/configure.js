// 스토어를 생성하는 함수륾 만들어서 내보냄
// 이 함수는 store/index.js 에서 불러와서 사용하게됨
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import modules from 'modules';
import ReduxThunk from 'redux-thunk';
import penderMiddleware from 'redux-pender';


const configure = () => {

  const logger = createLogger(); 
  //const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //const store = createStore(modules);
  const store = createStore(modules, applyMiddleware(logger, ReduxThunk, penderMiddleware()));

  return store;
}

export default configure;