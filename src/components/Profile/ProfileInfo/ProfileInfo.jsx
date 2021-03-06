import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from '../../common/Preloader';
import defaultPhoto from "../../../assets/images/head.svg";
import headerPhoto from "../../../assets/images/Polish_Wikinews_header_image.png"
import ProfileStatusFun from "./ProfileStatusFun";


let ProfileInfo = (props) => {
    if (!props.profile) { return <Preloader/> }
    let localProfile = props.profile;
    let contacts = props.profile.contacts;
    let job = localProfile.lookingForAJob ? 'Да -> ' : 'Нет';
    //let aboutMe = localProfile.aboutMe ? localProfile.aboutMe :  "Нет";

    return (
        <div>
            <img src={headerPhoto}/>
            <div className={classes.description}>
                <div><b>{localProfile.fullName}</b></div>
                <div>
                    <img style={{height: '300px', width: '300px'}} src={localProfile.photos.large ?
                        localProfile.photos.large : defaultPhoto}/>
                </div>
                <div>
                   <ProfileStatusFun updateUserStatus={props.updateUserStatus} userStatus={props.userStatus}/>
                </div>
                <div><i>Ищу работу :</i> {job}
                    {localProfile.lookingForAJobDescription}
                </div>
                {/*<div><p><i>Contacts:{<ListContacts contacts={contacts}/>}</i></p></div>*/}
            </div>

        </div>
    );
}

export default ProfileInfo;