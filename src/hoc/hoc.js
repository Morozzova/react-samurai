import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";

let mapStateToPropsToRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

const redirectToLoginPage = (RedirectedComponent) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={"/login"}/>
            }
            return <RedirectedComponent {...this.props}/>
        }
    }

    return connect(mapStateToPropsToRedirect)(RedirectComponent);
}

export default redirectToLoginPage;