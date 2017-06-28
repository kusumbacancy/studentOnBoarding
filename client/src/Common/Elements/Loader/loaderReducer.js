import { SHOW_PAGE_LOADING_SET } from "Redux/actions.js";

export const showPageLoading = (state = false, action) => {
    switch (action.type) {
       case SHOW_PAGE_LOADING_SET:
            return action.showPageLoading;
        default:
            return state;
    }
};
