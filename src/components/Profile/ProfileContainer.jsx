import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    savePhoto,
    toggleEditMode,
    updateProfile,
    updateStatus
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useMatch} from "react-router";
import redirectToLoginPage from "../../hoc/hoc";
import {compose} from "redux";

const ProfileMatch = (props) => {

    useEffect(() => {
        let userId;
        if (props.match) {
            userId = props.match.params.userId;
        } else {
            userId = props.authorizedUserId;
            if (!userId) {
                props.history.push("/login");
            }
        }
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, [props.match])

    return (
        <Profile {...props} profile={props.profile}
                 status={props.userStatus}
                 updateStatus={props.updateStatus}
                 isOwner={!props.match}
                 savePhoto={props.savePhoto}
                 updateProfile={props.updateProfile}
                 authorizedUserId={props.authorizedUserId}
                 toggleEditMode={props.toggleEditMode}
                 infoEditMode={props.infoEditMode}/>
    )
}

const ProfileContainer = (props) => {
    let match = useMatch("/profile/:userId/");
    return (
        <ProfileMatch {...props} match={match}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    infoEditMode: state.profilePage.infoEditMode
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto, updateProfile, toggleEditMode}),
    redirectToLoginPage
)(ProfileContainer);