import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";

const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile} updateStatus={props.updateStatus} status={props.status} />
        <MyPostsContainer />
    </div>
}



export default Profile;