import {useFormik} from "formik";
import * as Yup from "yup";
import styles from "./ProfileForm.module.css";
import React from "react";

const ProfileForm = (props) => {
    const formik = useFormik({
        initialValues: {
            aboutMe: props.profile.aboutMe,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            fullName: props.profile.fullName,
            github: props.profile.contacts.github,
            vk: props.profile.contacts.vk,
            facebook: props.profile.contacts.facebook,
            instagram: props.profile.contacts.instagram,
            twitter: props.profile.contacts.twitter,
            website: props.profile.contacts.website,
            youtube: props.profile.contacts.youtube,
            mainLink: props.profile.contacts.mainLink,
            authorizedUserId: props.authorizedUserId
        },
        /*        validationSchema: Yup.object({
                    login: Yup.string().required("Введите логин")
                        .max(50, "Максимальная длина - 50 символов"),
                    password: Yup.string().required("Введите пароль")
                        .max(30, "Максимальная длина - 30 символов")
                }),*/
        onSubmit(values, actions) {
            props.updateProfile(values, actions);
        }
    })

    return (
        <div>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <button type="submit">Update profile</button>
                </div>
                {formik.status && <div>
                    <ul>
                        {formik.status.map((s) => <li className={styles.profileErrors}>{s}</li>)}
                    </ul>
                </div>}
                <div>
                    Обо мне <input
                    type="text"
                    name="aboutMe"
                    id="aboutMe"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.aboutMe}/>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="lookingForAJob"
                        id="lookingForAJob"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lookingForAJob}/>
                    Я ищу работу
                </div>
                <div>
                    Какую работу я ищу? <input
                    type="text"
                    name="lookingForAJobDescription"
                    id="lookingForAJobDescription"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lookingForAJobDescription}/>
                    {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription ?
                        <div>{formik.errors.lookingForAJobDescription}</div> : null}
                </div>
                <div>
                    ФИО <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}/>
                    {formik.touched.fullName && formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}
                </div>
                <div>
                    <h3>Мои контакты:</h3>
                    {Object.keys(props.profile.contacts).map(key => {
                        return <div key={key}>
                            <b>{key}</b> <input
                            type="text"
                            name={key}
                            id={key}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[key]}/>
                        </div>
                    })}


                </div>
            </form>
        </div>
    )
}

export default ProfileForm;