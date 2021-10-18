import React from "react";
import classes from "./Users.module.css"
import * as axios from "axios";
import defaultPhoto from "./../../assets/images/head.png"


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
                    {
                        id: 2,
                        followed: false,
                        status: 'UX-UI designer',
                        name: 'Victor S.',
                        location: {city: 'Kiev', country: 'Ukraine'},
                        photos: {
                            small: null,
                            large: "https://i04.fotocdn.net/s127/bfdacb44a400fbd1/user_xl/2876986631.jpg"
                        }
                    },
                    {
                        id: 3,
                        followed: false,
                        status: 'developing cool',
                        name: 'Greg H.',
                        location: {city: 'London', country: 'UK'},
                        photos: {
                            small: null,
                            large: "https://i01.fotocdn.net/s124/3af3fb1b324c30bc/gallery_l/2824821900.jpg"
                        }
                    }

                ])


                axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                    props.setUsers(response.data.items)
                })
                /*[
                                {
                                    id: 1,
                                    followed: true,
                                    status: 'React developer',
                                    fullName: 'Andrew K.',
                                    location: {city: 'Brest', country: 'Belarus'},
                                    imageUrl: "https://proprikol.ru/wp-content/uploads/2020/10/kartinki-krasivyh-muzhchin-9.jpg"
                                },
                                {
                                    id: 2,
                                    followed: false,
                                    status: 'UX-UI designer',
                                    fullName: 'Victor S.',
                                    location: {city: 'Kiev', country: 'Ukraine'},
                                    imageUrl: "https://i04.fotocdn.net/s127/bfdacb44a400fbd1/user_xl/2876986631.jpg"
                                },
                                {
                                    id: 3,
                                    followed: false,
                                    status: 'developing cool',
                                    fullName: 'Greg H.',
                                    location: {city: 'London', country: 'UK'},
                                    imageUrl: "https://i01.fotocdn.net/s124/3af3fb1b324c30bc/gallery_l/2824821900.jpg"
                                }

                            ]*/
            }

    debugger;
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