import s from "./Message.module.css";

const Message = (props) => {
    return (
        <li className={s.message}>
            <div className={s.messageWrapper}>
                <img className={s.image} src={props.avatar}/>
                <span>{props.message}</span>
            </div>
        </li>
    )
}

export default Message;