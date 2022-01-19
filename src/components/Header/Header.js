import c from "./Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

let Header=(props)=> {

    return <header className={c.header}>
        <img
            src="https://gazovik.info/wp-content/uploads/2018/03/%D0%B2%D0%BA-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0.png"/>
        <div className={c.authorization}>

            {props.isLogged? props.name : <NavLink to='/login'>Log in</NavLink>}

        </div>
    </header>
}

export default Header;