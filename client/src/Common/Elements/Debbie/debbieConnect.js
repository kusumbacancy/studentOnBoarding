import {connect} from "react-redux";
import {  showDebbieMessageSet } from "Redux/actions.js";


const mapDispatchToProps = dispatch => ({
    setDebbieMessage: isLoading => {
        dispatch(showDebbieMessageSet(isLoading));
    }
});

const mapStateToProps = state => ({
    showDebbieMessage: state.showDebbieMessage
});

export default connect(mapStateToProps, mapDispatchToProps);
