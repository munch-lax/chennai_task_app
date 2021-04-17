import {reducer as formReducer} from 'redux-form'
import { combineReducers } from 'redux'
import taskReducer from './taskReducer'


export default combineReducers({
    tasks:taskReducer,
    form:formReducer,
    
})