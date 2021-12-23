import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import searchingJob from "../../../assets/images/searching-for-a-job.png";
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import noAvatar from "../../../assets/images/no-avatar.png";
import ProfileForm from "../ProfileForm";
import Contacts from "./Contacts";

const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto, updateProfile, authorizedUserId, toggleEditMode, infoEditMode}) => {

    if (!profile) {
        return <Preloader/>
    }

    const changeSelectedFile = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (<div className={s.content}>
        <div>
            <img src={profile.photos.large || noAvatar} className={s.profilePhoto}/>
            {isOwner && <div>
                <input type="file" accept="image/jpeg" onChange={changeSelectedFile}/>
            </div>}

            <ProfileStatusWithHooks updateStatus={updateStatus} status={status}/>
        </div>
        {console.log(infoEditMode)}
        {infoEditMode ? <ProfileForm updateProfile={updateProfile}
                                 authorizedUserId={authorizedUserId}
                                 toggleEditMode={toggleEditMode}
                                 profile={profile}/>
                                 : <ProfileData profile={profile} toggleEditMode={toggleEditMode} isOwner={isOwner}/>
        }

    </div>)
}

const ProfileData = ({profile, isOwner, toggleEditMode}) => {
    return (
        <div className={s.descriptionBlock}>
            {isOwner && <div><button onClick={() => toggleEditMode(true)}>Edit</button></div>}

            <h2>{profile.fullName}</h2>

            <div><b>Обо мне: </b>{profile.aboutMe}</div>
            <div className={s.job}>
                {(profile.lookingForAJob) ? <div className={s.searchingJob}><img
                        src={searchingJob}/><span>{profile.lookingForAJobDescription}</span></div> :
                    <span>Не ищу работу.</span>}
            </div>

            <Contacts profile={profile}/>


        </div>

    )
}

export default ProfileInfo;