import s from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import LoginFormik from "./LoginFormik";
import React from "react";
import {Navigate} from "react-router";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginOnSite(formData.login, formData.password, formData.rememberMe);
    }
    const onSubmitFormik = (formData, actions) => {
        actions.setStatus(undefined);
        props.loginOnSite(formData.login, formData.password, formData.rememberMe, actions);
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div className={s.loginWrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>

            <LoginFormik onSubmitFormik={onSubmitFormik}/>
        </div>
    )
}

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField("Login", "login", [required], Input)}
            <div><Field placeholder={"Password"} name={"password"}
                        component={Input}
                        validate={[required]}/>
            </div>
            <div><Field type={"checkbox"} name={"rememberMe"}
                        component={Input}/> remember me
            </div>

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',                           // a unique name for this form
    fields: ['login', 'password', 'rememberMe'] // all the fields in your form
})(LoginForm);

export default Login;