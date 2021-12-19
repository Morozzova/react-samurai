import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import DialogsFormik from "./DialogsFormik";

const maxLength30 = maxLengthCreator(30);

const Dialogs = (props) => {

    let dialogElements = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}
                                                                  key={d.id}/>)
    let messagesElements = props.messagesData.map((m) => <Message message={m.message} avatar={m.avatar} key={m.id}/>)

    const addNewMessage = (formData) => {
        props.addMessage(formData.message);
    }
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                {dialogElements}
            </ul>
            <div className={s.messagesList}>
                <ul>
                    {messagesElements}
                </ul>
                <DialogsReduxForm onSubmit={addNewMessage}/>

                <DialogsFormik addNewMessage={addNewMessage}/>
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div><Field placeholder="Enter your message"
                        component={Textarea} name={"message"} validate={[required, maxLength30]}/></div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({
    form: 'dialogs'
})(DialogsForm);

export default Dialogs;