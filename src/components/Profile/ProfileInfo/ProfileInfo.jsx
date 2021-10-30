import React from "react";
import classes from "./ProfileInfo.module.css";
import LoaderComponent from '../../common/LoaderComponent';


let ProfileInfo = (props) => {
debugger;
if(!props.profile){
    return <LoaderComponent/>
}
    return(
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Polish_Wikinews_header_image.png"></img>
            <div className={classes.description}>
                <div ><img style={{height:'300px', width:'300px'}} src={props.profile.photos.large}/></div>
                +description
            </div>

        </div>
    );
}

export default ProfileInfo;