import React from "react";

class ProfileStatus extends React.Component{

    state = {
        isEditing:false,
        statusText:this.props.userStatus,
    }

    editOn(){
        this.setState({
            isEditing: true
        })
    }
    editOff = () => {
        this.setState({
                isEditing: false,

             })
        this.props.updateUserStatus(this.state.statusText)
    }
    onStatusChange = (e) => {
         this.setState({statusText: e.target.value});
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.userStatus !== this.props.userStatus && typeof(this.props.userStatus)!="object"){
            this.setState({
                statusText:this.props.userStatus
            });
        }
    }
    render() {
        console.log(this.state.statusText);

        return(
            <div>
                {}
                <i>Статус : </i>
                {!this.state.isEditing ?
                    <span onDoubleClick={this.editOn.bind(this)}>
                        {this.state.statusText || "------"}
                     </span>
                : <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.editOff}
                         defaultValue={this.state.statusText}/>
                }
            </div>
        )
    }
}

export default ProfileStatus;