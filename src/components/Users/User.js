import React from "react";
import classes from "./Users.module.css";
import defaultPhoto from "../../assets/images/head.svg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followAPI} from "../../API/api";


let User = (props) => {

    return (
        <div>
             <div>

                {
                   props.pages.map(p => {
                       return <a className={props.currentPage === p ? classes.pageSelected : ""}

                                onClick={(e) => {
                                      props.pageChanged(p)
                                  }}> {p} </a>
                    })}
            </div>

            {/*<button onClick={this.addUsers}>Add Users</button>*/}
            {
                props.users.map(u => <div key={u.id}>
                    <div className={classes.item}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={(u.photos.large) ? u.photos.large : defaultPhoto}></img>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button /*disabled={  props.followProceess ? true:false}*/ onClick={() => {

                                    //props.followProcess(true)//, u.id);
                                    followAPI.unfollowUser(u.id).then(response => {
                                        console.log(props);
                                        if (response.data.resultCode == 0) {
                                            //props.followProcess(false)//, u.id);
                                            props.unfollow(u.id);

                                        }
                                    })

                                }
                                }>
                                    Unfollow</button>
                                : <button /*disabled={  props.followProceess ? true:false}*/  onClick={() => {

                                    followAPI.followUser(u.id).then(response => {
                                        //props.followProcess(true)//, u.id);

                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        //props.followProcess(false)//, u.id);
                                        }
                                    })

                                }
                                }>
                                    Follow</button>
                            }
                        </div>

                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{(u.status) ? u.status : ""}</div>
                    </span>
                            {/* <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>*/}
                </span>
                    </div>
                </div>)}
        </div>
    )
    debugger;
}

export default User