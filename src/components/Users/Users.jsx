import React from "react";
import classes from "./Users.module.css"
import * as axios from "axios";
import defaultPhoto from "./../../assets/images/head.svg"


let Users = (props) => {

    let addUsers = () => {
                props.setUsers([
                    {
                        id: 1,
                        followed: true,
                        status: 'React developer',
                        name: 'Andrew K.',
                        location: {city: 'Brest', country: 'Belarus'},
                        photos: {
                            small: null,
                            large: "https://proprikol.ru/wp-content/uploads/2020/10/kartinki-krasivyh-muzhchin-9.jpg"
                        }
                    },

                ])
                // axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                //     props.setUsers(response.data.items)
                // })
                /*[
                                {
                                    id: 1,
                                    followed: true,
                                    status: 'React developer',
                                    fullName: 'Andrew K.',
                                    location: {city: 'Brest', country: 'Belarus'},
                                    imageUrl: "https://proprikol.ru/wp-content/uploads/2020/10/kartinki-krasivyh-muzhchin-9.jpg"
                                },
                            ]*/
            }


    return (

        <div>
            <button onClick={addUsers}>Add Users</button>
            {props.users.map(u => <div key={u.id}>
                <div className={classes.item}>

                    <img src={(u.photos.large) ? u.photos.large : defaultPhoto}/>
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


export default Users;