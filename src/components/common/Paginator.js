import classes from "../Users/Users.module.css";
import React from "react";

const Paginator=(props)=>{
   return <div>
        {
            props.pages.map(p => {
                return <a className={props.currentPage === p ? classes.pageSelected : ""}
                          onClick={(e) => {
                              props.pageChanged(p)
                          }}> {p} </a>
            })
        }
        <a onClick={props.listChanged}>...</a>
    </div>
}

export default Paginator