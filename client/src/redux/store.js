import {createStore, combineReducers,  compose} from "redux";
import {reducer as reduxFormReducer} from "redux-form";
import {currentUser} from "App/User/userReducer.js";
import {showPageLoading} from "Common/Elements/Loader/loaderReducer.js";
import {manageAlertMessage} from "Common/Elements/Alert/alertMessageReducer.js";
import {showDebbieMessage} from "Debbie/debbieReducer.js";
import {showScheduleState} from "App/Schedule/scheduleReducer.js";

const store = createStore(
    combineReducers({
        form: reduxFormReducer,
        currentUser,
        showPageLoading,
	      manageAlertMessage,
        showDebbieMessage,
        showScheduleState
    }),
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
export default store;
