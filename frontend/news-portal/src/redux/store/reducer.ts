import { REGISTER_USER_REQUEST , LOGIN_USER} from "../actions/action"
export const reducer=(state={
    formData:null
},action)=>{
    console.log('action >>',action.payload);
    
    switch(action.type){
        case REGISTER_USER_REQUEST:{
            console.log('registrationData >>',action.payload)
            return{
                ...state,
                registrationData: action.payload.formData
            
            }
        }
        case LOGIN_USER:{
            console.log('loginData >>',action.payload.formData)
            return{
                ...state,
                loginData: action.payload.formData
            }
        }
        default:
            return state
    }
}