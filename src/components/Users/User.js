import React from "react";
import classes from "./Users.module.css";
import defaultPhoto from "../../assets/images/head.png";
import {NavLink} from "react-router-dom";


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
                        <NavLink to="/profile">
                            <img src={(u.photos.large) ? u.photos.large : defaultPhoto}></img>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>

                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{(u.status) ? u.status : "default status"}</div>
                    </span>
                            {/* <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>*/}
                </span>
                    </div>
                </div>)}
        </div>
    );
}

export default User;