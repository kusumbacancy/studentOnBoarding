import { DEBBIE_MESSAGE_SET } from "Redux/actions.js";

export const showDebbieMessage = (state = '', action) => {
    switch (action.type) {
       case DEBBIE_MESSAGE_SET:
            return action.showDebbieMessage;
        default:
            return state;
    }
};
