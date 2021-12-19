import {useFormik} from "formik";
import * as Yup from "yup";
import React from "react";
import s from "./Login.module.css";

const LoginFormik = (props) => {
    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
            rememberMe: false
        },
        validationSchema: Yup.object({
            login: Yup.string().required("Введите логин")
                .max(50, "Максимальная длина - 50 символов"),
            password: Yup.string().required("Введите пароль")
                .max(30, "Максимальная длина - 30 символов")
        }),
        onSubmit(values, actions) {
            props.onSubmitFormik(values, actions);

        }
    })
    return (
        <div>
            <h3>Login Formik</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.formControl + " " + (formik.touched.login && formik.errors.login ? s.error : "")}>
                    <input
                        type="text"
                        placeholder="Login"
                        name="login"
                        id="login"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.login}/>

                    {formik.touched.login && formik.errors.login ? <div>{formik.errors.login}</div> : null}
                </div>
                <div
                    className={s.formControl + " " + (formik.touched.password && formik.errors.password ? s.error : "")}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}/>

                    {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </div>
                <div
                    className={s.formControl + " " + (formik.touched.password && formik.errors.password ? s.error : "")}>
                    <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.rememberMe}/>
                </div>
{/*                {props.getCaptcha && <div>{props.getCaptcha}</div>}*/}
                {formik.status && <div className={s.formSummaryError}>
                    {formik.status}
                </div>}
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginFormik;