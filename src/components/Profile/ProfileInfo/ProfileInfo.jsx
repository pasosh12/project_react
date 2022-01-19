import React from "react";
import classes from "./ProfileInfo.module.css";
import LoaderComponent from '../../common/LoaderComponent';
import defaultPhoto from "../../../assets/images/head.svg";


let ProfileInfo = (props) => {

    if (!props.profile) {
        return <LoaderComponent/>
    }
    let localProfile = props.profile;
    let job = '';
    localProfile.lookingForAJob ? job = "Ищу работу" : job = '';
    console.log("profile " + localProfile)
    console.log("profile props " + props.profile)
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Polish_Wikinews_header_image.png"/>

            <div className={classes.description}>
                <div><p>{props.profile.fullName}</p></div>
                <div><img style={{height: '300px', width: '300px'}} src={localProfile.photos.large ?
                    localProfile.photos.large : defaultPhoto}/></div>
                <div><p>{localProfile.status}</p></div>
                <div>Ищу работу : {localProfile.lookingForAJob ? 'Да' : 'Нет'}</div>
            </div>

        </div>
    );
}

export default ProfileInfo;