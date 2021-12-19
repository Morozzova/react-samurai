import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        localStatus: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
            localStatus: this.state.localStatus
        });

        this.props.updateStatus(this.state.localStatus);
    }
    updateUserStat = (e) => {
        this.setState({
            localStatus: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.localState != this.props.state) {
            this.setState(
                {
                    localStatus: this.props.status
                }
            )
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.updateUserStat}
                           value={this.state.localStatus}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;