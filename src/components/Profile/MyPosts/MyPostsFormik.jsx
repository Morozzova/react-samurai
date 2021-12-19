import {useFormik} from "formik";
import * as Yup from "yup";
import React from "react";
import s from "../../common/FormsControls/FormsControls.module.css";

const PostsFormFormik = (props) => {
    const formik = useFormik({
        initialValues: {
            post: ""
        },
        validationSchema: Yup.object({
            post: Yup.string().required("Введите текст поста")
                .max(10, "Максимальная длина сообщения - 10 символов")
        }),
        onSubmit(values) {
            props.addNewPost(values)
        }
    })

    return (
        <div>
            <h3>My posts Formik</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.formControl + " " + (formik.touched.post && formik.errors.post ? s.error : "")}>
                    <textarea
                        placeholder="Enter your text."
                        name="post"
                        id="post"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.post}/>

                    {formik.touched.post && formik.errors.post ? <div>{formik.errors.post}</div> : null}
                </div>
                <div>
                    <button type="submit">Add post</button>
                </div>
            </form>
        </div>
    )
}

export default PostsFormFormik;