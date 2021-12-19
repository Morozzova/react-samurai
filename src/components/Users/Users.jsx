import s from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {

    return (
        <div className={s.usersWrapper}>
            <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize}
                       onPageChanged={onPageChanged} portionSize={10}/>
            {props.usersData.map((u) => <User user={u}
                                              key={u.id}
                                              followingInProgress={props.followingInProgress}
                                              unfollow={props.unfollow}
                                              follow={props.follow}/>)}

        </div>
    )
}

export default Users;