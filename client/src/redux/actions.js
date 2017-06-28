// Declare action types
export const CURRENT_USER_SET = 'currentUser/SET';
export const SHOW_PAGE_LOADING_SET = 'showPageLoading/SET';
export const SCHEDULE_STATE_SET = 'showScheduleState/SET';
export const DEBBIE_MESSAGE_SET = 'showDebbieMessage/SET';
export const ALERT_MESSAGE_PUSH = 'alertMessage/PUSH';
export const ALERT_MESSAGE_POP = 'alertMessage/POP';

/* Register Actions For Users*/
export const currentUserSet = user => ({
    type: CURRENT_USER_SET,
    user
});
export const selectedUserDetailSet = selectedUserDetail => ({
    type: SELECTED_USER_DETAIL_SET,
    selectedUserDetail
});
export const showPageLoadingSet = showPageLoading => ({
    type: SHOW_PAGE_LOADING_SET,
    showPageLoading
});
export const showScheduleStateSet = showScheduleState => ({
    type: SCHEDULE_STATE_SET,
    showScheduleState
});
export const showDebbieMessageSet = showDebbieMessage => ({
    type: DEBBIE_MESSAGE_SET,
    showDebbieMessage
});
/* Notify Messages Actions */
export const alertMessagePush = messageArray => ({
    type : ALERT_MESSAGE_PUSH,
    messageArray
});
export const alertMessagePop = () => ({
    type : ALERT_MESSAGE_POP
});
