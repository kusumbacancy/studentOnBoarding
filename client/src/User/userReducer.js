import {CURRENT_USER_SET, SELECTED_USER_DETAIL_SET, SHOW_PAGE_LOADING} from "Redux/actions.js";

/* Declaration of functions */
export const currentUser = (state = {}, action) => {
    switch (action.type) {
        case CURRENT_USER_SET:
            return action.user;
        default:
            return state;
    }
};

export const selectedUserDetail = (state = {}, action) => {
    switch (action.type) {
       case SELECTED_USER_DETAIL_SET:
            return action.selectedUserDetail;
        default:
            return state;
    }
};
