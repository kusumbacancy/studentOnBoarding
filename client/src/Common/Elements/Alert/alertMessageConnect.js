import {connect} from "react-redux";

import {alertMessagePush, alertMessagePop} from "Redux/actions.js";

const mapStateToProps = state => ({
    manageAlertMessage: state.manageAlertMessage//state.manageAlertMessage ? state.manageAlertMessage[state.manageAlertMessage.length - 1] : null
});

const mapDispatchToProps = dispatch => ({
    displayAlertMessage: (messageArray) => {
        dispatch(alertMessagePush(messageArray));
    },
    removeAlertMessage: () => {
        dispatch(alertMessagePop());
    }
});

export default connect(mapStateToProps, mapDispatchToProps);
