import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {getCaptcha, loginOnSite} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    password: state.auth.password,
    rememberMe: state.auth.rememberMe
})

export default connect(mapStateToProps, {loginOnSite, getCaptcha})(LoginContainer);