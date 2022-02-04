import React from "react";
import classes from "./ProfileInfo.module.css";
import LoaderComponent from '../../common/LoaderComponent';
import defaultPhoto from "../../../assets/images/head.svg";
import headerPhoto from "../../../assets/images/Polish_Wikinews_header_image.png"
import Redirect from "react-router-dom/es/Redirect";

let ProfileInfo = (props) => {
    if ( !props.profile) { return <LoaderComponent/> }
    if( !props.isLogged) { return <Redirect to={'/login'}/>}
    let localProfile = props.profile;
    let contacts = props.profile.contacts;
    let job = localProfile.lookingForAJob ? 'Да -> ' : 'Нет';
    let aboutMe = localProfile.aboutMe ? localProfile.aboutMe :  "Нет";

    //console.log(localProfile)
    return (
        <div>
            <img src={headerPhoto}/>
            <div className={classes.description}>
                <div><b>{localProfile.fullName}</b></div>
                <div>
                    {/*<img style={{height: '300px', width: '300px'}} src={localProfile.photos.large ?*/}
                    {/*    localProfile.photos.large : defaultPhoto}/>*/}
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