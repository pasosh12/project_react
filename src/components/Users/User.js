import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import defaultPhoto from "../../assets/images/head.svg";
import React from "react";

const User=({user, ...props})=>{
    return (
        <div className={classes.item}>
            <NavLink to={'/profile/' + user.id}>
                <img src={(user.photos.large) ? user.photos.large : defaultPhoto}></img>
            </NavLink>
            <div key={user.id}>
                {user.followed
                    ?
                    <button disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                props.unfollowUser(user.id);
                            }}>
                        Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  props.followUser(user.id);
                              }}>
                        Follow</button>
                }
            </div>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{(user.status) ? user.status : ""}</div>
                    </span>
                {/* <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>*/}
                </span>
    </div>
    )
}
export default User