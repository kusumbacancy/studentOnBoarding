import {ALERT_MESSAGE_PUSH, ALERT_MESSAGE_POP} from "Redux/actions.js";

/* Declaration of functions */
export const manageAlertMessage = (state = {}, action) => {
     switch(action.type){
        case ALERT_MESSAGE_PUSH:
            return action.messageArray;
        case ALERT_MESSAGE_POP:{
                if(state){
                    state = {};
                    return state;
                }
                else{
                    return state;
                }
            }
        default:
            return state;
    }
};
