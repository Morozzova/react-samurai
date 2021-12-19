import s from './Friends.module.css';
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";
import React from "react";

const Friends = (props) => {
    let friendsElements = props.friends.map((f) => <FriendItem id={f.id} name={f.name} avatar={f.avatar} key={f.id} />)
    return (
        <div>
            <h3>Friends</h3>
                <ul className={s.friends}>
                    {friendsElements}
                </ul>
        </div>
    )
}

export default Friends;