import { combineReducers } from 'redux';
import eventReducer from './eventReducer'
import selectReducer from './selectReducer'
import navReducer from './navReducer'
import loginReducer from './loginReducer';


export default combineReducers({
    events: eventReducer,
    e: selectReducer,
    nav: navReducer,
    title: eventReducer,
    userData: loginReducer,
    
    

});