import React from "react";
import classes from "./Users.module.css";
import defaultPhoto from "../../assets/images/head.svg";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator";
import User from "./User";


let Users = (props) => {
    console.log(props)
    return (
        <div>
            <Paginator {...props}/>

            {/*<button onClick={this.addUsers}>Add UsersOld</button>*/}
            {
                props.users.map(u => <User user={u}
                                           {...props}
                                           // unfollowUser={props.unfollowUser}
                                           // followUser={props.followUser}
                                           // followingInProgress={props.followingInProgress}
                    />
                    )
            }
        </div>
    )

}

export default Users