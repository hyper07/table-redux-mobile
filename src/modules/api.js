import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';
import { setData } from "modules/data";

const initialState = {
    data: {
        characters: ''
    }
}

const GET_POST = 'GET_POST';
/* redux-pender has Flux standard action(https://github.com/acdlite/flux-standard-action) 
   structure, can create as createAction. 
   second parameter must function that return promise
*/
//const GET_POST_PENDING = 'GET_POST_PENDING';
//const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
//const GET_POST_FAILURE = 'GET_POST_FAILURE';


function getPostAPI(pageID) {
    return axios.get(`https://api.jikan.moe/v3/manga/${pageID}/characters`)
}

export const getPost = createAction(GET_POST, getPostAPI);

export default handleActions({
    ...pender({
        type: GET_POST, // will generate action objects by given type
        //type: GET_POST_FAILURE,
        //onPending: (state, action) => state, //for pending process
        onFailure: (state, action) => {
            //state, //for failure process
             return {
                data:action
            }
        },
        onSuccess: (state, action) => { // for success porcess
            const { characters } = action.payload.data;
            //loadedData=loadedData.concat(characters);
            setData(characters);
            return {
                data: {
                    characters
                }
            }
        }
        // when no function declared then return (state, action) => state 
    })
}, initialState);

