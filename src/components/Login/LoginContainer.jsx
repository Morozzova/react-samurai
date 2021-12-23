import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {getCaptchaUrl, loginOnSite} from "../../redux/auth-reducer";

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
    rememberMe: state.auth.rememberMe,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {loginOnSite, getCaptchaUrl})(LoginContainer);