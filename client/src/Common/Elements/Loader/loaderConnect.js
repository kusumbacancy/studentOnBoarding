import {connect} from "react-redux";
import {  showPageLoadingSet } from "Redux/actions.js";


const mapDispatchToProps = dispatch => ({
    setPageLoading: isLoading => {
        dispatch(showPageLoadingSet(isLoading));
    }
});

const mapStateToProps = state => ({
    showPageLoading: state.showPageLoading
});

export default connect(mapStateToProps, mapDispatchToProps);
