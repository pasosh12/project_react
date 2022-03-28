import React from "react";
import {useState} from 'react'

const ProfileStatus=(props)=>{
    const [ isEditing, setEditing ] = useState(false);
    const [ statusText, setStatusText ] = useState(props.userStatus);
    //
    // let state = {
    //     isEditing:false,
    //     statusText:props.userStatus,
    // }

    let editOn=()=>{
        setEditing(true)
    }
   let editOff = () => {
       setEditing(false);
        props.updateUserStatus(statusText)
    }
    let onStatusChange = (e) => {
        setStatusText( e.target.value);
    }

        console.log(statusText);

        return(
            <div>
                {}
                <i>Статус : </i>
                {!isEditing ?
                    <span onDoubleClick={editOn}>
                        {statusText || "------"}
                     </span>
                    : <input onChange={onStatusChange} autoFocus={true} onBlur={editOff}
                             defaultValue={statusText}/>
                }
            </div>
        )

}

export default ProfileStatus;