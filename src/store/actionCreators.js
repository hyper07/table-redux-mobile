// 편의상, 나중에 액션 생성 함수들을 미리 바인딩해서 내보냄
import { bindActionCreators } from 'redux';
import * as apiActions from 'modules/api';
import * as loadmoreActions from 'modules/loadmore';

import store from './index';

const { dispatch } = store;

export const ApiActions = bindActionCreators(apiActions, dispatch);
export const LoadmoreActions = bindActionCreators(loadmoreActions, dispatch);

