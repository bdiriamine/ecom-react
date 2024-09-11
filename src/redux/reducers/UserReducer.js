import { GetCurrentUserconst, LOGIN, REGISTER } from "../const/user";

const initialstate = {
    currentuser : [],
    error:{},
    
}
export const UserReducer = (state=initialstate,action) =>{
    switch(action.type){
        case LOGIN : 
        return {...state , currentuser:action.payload} ;
        case REGISTER :
        return {...state , currentuser:action.payload} ;
        default : return state;
    }
}
export const CurrentUserReducer = (state=initialstate,action) =>{
    switch(action.type){
        case GetCurrentUserconst :
            console.log(action.payload) 
        return {...state , currentuser:action.payload} ;
        default : return state;
    }
}
