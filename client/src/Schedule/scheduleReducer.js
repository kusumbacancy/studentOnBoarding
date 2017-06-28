import { SCHEDULE_STATE_SET } from "Redux/actions.js";

export const showScheduleState = (state = false, action) => {
    switch (action.type) {
       case SCHEDULE_STATE_SET:
            return action.showScheduleState;
        default:
            return state;
    }
};
