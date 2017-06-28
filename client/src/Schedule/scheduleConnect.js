import {connect} from "react-redux";
import {  showScheduleStateSet } from "Redux/actions.js";


const mapDispatchToProps = dispatch => ({
    setScheduleState: isLoading => {
        dispatch(showScheduleStateSet(isLoading));
    }
});

const mapStateToProps = state => ({
    showScheduleState: state.showScheduleState
});

export default connect(mapStateToProps, mapDispatchToProps);
