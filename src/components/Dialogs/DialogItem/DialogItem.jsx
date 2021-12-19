import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <li className={s.dialog}>
            <NavLink to={path} className={(navData) => navData.isActive ? s.active : ''}>
                <div className={s.dialogWrapper}>
                    <img className={s.image}
                         src={props.avatar}/>
                    <span>{props.name}</span>
                </div>
            </NavLink>
        </li>
    )
}

export default DialogItem;