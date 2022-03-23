import c from "./Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import vkLogo from "../../assets/images/vk-logo.svg";

let Header=(props)=> {
    const logout=()=>{
        props.profileLogout();
    }
    return <header className={c.header}>
        <img src={vkLogo} />
        <div className={c.authorization}>
            {props.isLogged ?  <div>{props.name}<br/><button onClick={logout}>Log out</button></div>: <NavLink to='/login'>Log in</NavLink>}

        </div>
    </header>
}

export default Header;