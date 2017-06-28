import {connect} from "react-redux";
import {currentUserSet} from "Redux/actions.js";


const mapDispatchToProps = dispatch => ({
    setUser: text => {
        dispatch(currentUserSet(text));
    }
});

const mapStateToProps = state => ({
    user: state.currentUser

});


export default connect(mapStateToProps, mapDispatchToProps);
