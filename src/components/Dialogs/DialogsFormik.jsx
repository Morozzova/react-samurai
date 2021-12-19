import {useFormik} from "formik";
import * as Yup from "yup";
import React from "react";
import s from "../common/FormsControls/FormsControls.module.css";

const DialogsFormik = (props) => {
    const formik = useFormik({
        initialValues: {
            message: ""
        },
        validationSchema: Yup.object({
            message: Yup.string().required("Введите текст сообщения")
                .max(50, "Максимальная длина сообщения - 50 символов")
        }),
        onSubmit(values) {
            props.addNewMessage(values)
        }
    })

    return (
        <div>
            <h3>Dialogs Formik</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.formControl + " " + (formik.touched.message && formik.errors.message ? s.error : "")}>
                    <textarea
                        placeholder="Enter your text."
                        name="message"
                        id="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.post}/>

                    {formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null}
                </div>
                <div>
                    <button type="submit">Add post</button>
                </div>
            </form>
        </div>
    )
}

export default DialogsFormik;