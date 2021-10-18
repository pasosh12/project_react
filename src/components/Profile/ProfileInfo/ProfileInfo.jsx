import classes from "./ProfileInfo.module.css";

const ProfileInfo=(props)=>{
    return(
        <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Polish_Wikinews_header_image.png"></img>
        <div className={classes.description}>
            ava+description
        </div>

    </div>
    );
}

export default ProfileInfo;