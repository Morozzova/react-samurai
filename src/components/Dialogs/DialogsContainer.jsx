import React from 'react';
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import redirectToLoginPage from "../../hoc/hoc";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsInner: state.dialogsPage.dialogsInner,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    redirectToLoginPage
)(Dialogs);