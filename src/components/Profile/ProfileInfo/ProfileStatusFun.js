import React from "react";
import {useState, useEffect} from 'react'

const ProfileStatus = (props) => {
    let [isEditing, setEditing] = useState(false);
    let [statusText, setStatusText] = useState(props.userStatus);

    useEffect(() => {
        setStatusText(props.userStatus)
    },[props.userStatus]);

    let editOn = () => {
        setEditing(true)
    }
    let editOff = () => {
        setEditing(false);
        props.updateUserStatus(statusText)
    }
    const onStatusChange = (e) => {
        setStatusText(e.target.value);
    }

    return (
        <div>
            {}
            <i>Статус : </i>
            {!isEditing ?
                <span onDoubleClick={editOn}>
                        {props.userStatus || "------"}
                     </span>
                : <input onChange={onStatusChange} autoFocus={true} onBlur={editOff}
                         defaultValue={statusText}/>
            }
        </div>
    )

}

export default ProfileStatus;
