import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import searchingJob from "../../../assets/images/searching-for-a-job.png";
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, updateStatus, status}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (<div className={s.content}>

        <div className={s.descriptionBlock}>
            <h2>{profile.fullName}</h2>
            <div>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks updateStatus={updateStatus} status={status}/>
            </div>
            <div>{profile.aboutMe}</div>
            <div className={s.job}>
                {(profile.lookingForAJob) ? <div className={s.searchingJob}><img
                        src={searchingJob}/><span>{profile.lookingForAJobDescription}</span></div> :
                    <span>Не ищу работу.</span>}
            </div>
            <h3>Контакты и соцсети:</h3>
            <ul>
                {(profile.contacts.facebook) ? <li><b>Facebook:</b> {profile.contacts.facebook}</li> : null}
                {(profile.contacts.website) ? <li><b>Website:</b> {profile.contacts.website}</li> : null}
                {(profile.contacts.vk) ? <li><b>VK:</b> {profile.contacts.vk}</li> : null}
                {(profile.contacts.twitter) ? <li><b>Twitter:</b> {profile.contacts.twitter}</li> : null}
                {(profile.contacts.instagram) ?
                    <li><b>Instagram:</b> {profile.contacts.instagram}</li> : null}
                {(profile.contacts.youtube) ? <li><b>Youtube:</b> {profile.contacts.youtube}</li> : null}
                {(profile.contacts.github) ? <li><b>Github:</b> {profile.contacts.github}</li> : null}
            </ul>
        </div>
    </div>)
}


export default ProfileInfo;