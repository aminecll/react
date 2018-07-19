import { FETCH_LOGIN } from './types';




export const  fetchLogin = userData => dispatch => {
   
   console.log([userData.username, userData.password])
        fetch("http://dsc-power.com/Atelier/web/json_login_test",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            
            
            body:userData
            
                
            
        
            
        })
        .then((response) => response.json())
        .then((responseJson) => dispatch ({
            type: FETCH_LOGIN,
            payload: responseJson,
            isAuth: true
        }))
    


    }
    