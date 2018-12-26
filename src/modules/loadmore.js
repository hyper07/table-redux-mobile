import { handleActions, createAction } from 'redux-actions';
import { getPageNumber } from "modules/data";

const LOADMORE = 'LOADMORE';

export const loadmore = createAction(LOADMORE);

export default handleActions({
    
    [LOADMORE]: (state, action) =>  {return getPageNumber() + 1}
}, 0);