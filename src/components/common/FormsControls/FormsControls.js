import s from './FormsControls.module.css';
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";
import React from "react";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}

export const TextareaFormik = (props) => {
    return (
        <div className={s.formControl}>
            <div>
                <textarea/>
            </div>
            <span>Error</span>
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props) => {
    return (
        <div><Field placeholder={placeholder} name={name}
                    component={component}
                    validate={validators}
                    {...props} />
        </div>
    )
}