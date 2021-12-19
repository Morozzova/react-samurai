import s from './FriendItem.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    return (
        <li className={s.friendItem}><NavLink to={"/dialogs/" + props.id}><img src={props.avatar}/><div>{props.name}</div>
        </NavLink></li>
    )
}

export default FriendItem;