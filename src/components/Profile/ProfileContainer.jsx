import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useMatch} from "react-router";
import redirectToLoginPage from "../../hoc/hoc";
import {compose} from "redux";

class ProfileMatch extends React.Component {

    componentDidMount() {
        let userId;
        if (this.props.match) {
            userId = this.props.match.params.userId;
        } else {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.userStatus} updateStatus={this.props.updateStatus}/>
    }
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
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    redirectToLoginPage
)(ProfileContainer);