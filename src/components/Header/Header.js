import c from "./Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import vkLogo from "../../assets/images/vk-logo.svg";

let Header=(props)=> {

    return <header className={c.header}>
        <img src={vkLogo} />
        <div className={c.authorization}>

            {props.isLogged? props.name : <NavLink to='/login'>Log in</NavLink>}

        </div>
    </header>
}

export default Header;