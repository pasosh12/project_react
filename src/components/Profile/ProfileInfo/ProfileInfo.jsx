import React from "react";
import classes from "./ProfileInfo.module.css";
import LoaderComponent from '../../common/LoaderComponent';
import defaultPhoto from "../../../assets/images/head.svg";


let ProfileInfo = (props) => {
    let localProfile = props.profile;
    let contacts = props.profile.contacts;
    let job = localProfile.lookingForAJob ? 'Да -> ' : 'Нет';
    let aboutMe = localProfile.aboutMe ? localProfile.aboutMe :  "Нет";
    if (!props.profile) { return <LoaderComponent/> }
    //console.log(localProfile)
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Polish_Wikinews_header_image.png"/>

            <div className={classes.description}>
                <div><b>{localProfile.fullName}</b></div>
                <div>
                    <img style={{height: '300px', width: '300px'}} src={localProfile.photos.large ?
                        localProfile.photos.large : defaultPhoto}/>
                </div>
                <div><p><i>Статус:</i> {aboutMe}</p></div>
                <div><i>Ищу работу :</i> {job}
                    {localProfile.lookingForAJobDescription}
                </div>
                {/*<div><p><i>Contacts:{<ListContacts contacts={contacts}/>}</i></p></div>*/}
            </div>

        </div>
    );
}

export default ProfileInfo;