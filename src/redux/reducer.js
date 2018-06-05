import postInfoData from '../data/postinfo'
import {combineReducers} from 'redux'

function PostInfoReducer(state = postInfoData,action) {
    switch (action.type) {
      case 'REMOVE_POST':
    return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADDING_POST':
            return [...state,action.post]
        case 'LOADING_POST':
            return action.postfirebase

     default:
    return state
}
}

function CommentsReducer(state = {}, action)
{
   switch (action.type)
   {
       case 'ADDING_COMMENT':
           if(!(state[action.postid])) {
               return {...state, [action.postid]: [action.commentpass]}
           }
           else
           {
               return {...state,[action.postid]: [...state[action.postid],action.commentpass]}
           }
       case 'LOADING_COMMENT':
           return action.commentfirebase
   }
    return state
}

const rootReducer = combineReducers({PostInfoReducer,CommentsReducer})
export default rootReducer