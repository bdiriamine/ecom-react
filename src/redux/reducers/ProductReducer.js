import { GETONEPRODUCT, GETPRODUCT, POSTPRODUCT } from "../const/products";

const initialstate = {
    products : [],
    oneproduct:{},
}
export const ProductReducer = ( state=initialstate, action) =>{
    switch(action.type){
        case GETPRODUCT : 
        return {...state , products:action.payload} ;
        case GETONEPRODUCT:
        return {...state, oneproduct:action.payload}
        default : return state;
    }
}
