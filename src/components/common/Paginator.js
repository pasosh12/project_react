import classes from "../Users/Users.module.css";
import React, {useState} from "react";

const Paginator = ({currentPage,pageChanged,usersTotalCount,usersOnPage}) => {

    let pages = [];
    let portionSize=50;
    let pagesCount = Math.ceil(usersTotalCount / usersOnPage);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionsCount=Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionLimit = (portionNumber - 1) * portionSize + 1;
    let rightPortionLimit = portionNumber * portionSize;

    return (

        <div>
            {(portionNumber > 1) && <a onClick={()=>setPortionNumber((portionNumber-1))}>...</a> }
            {
                pages.filter(p => (p >= leftPortionLimit && p <= rightPortionLimit)).map(p => {
                    return (
                        <a className={currentPage === p ? classes.pageSelected : ""}
                           onClick={(e) => {
                              pageChanged(p)
                           }}> {p} </a>
                    )
                })
            }
            {portionNumber < portionsCount  && <a onClick={()=>setPortionNumber(portionNumber+1)}>...</a>}
        </div>
    )
}

export default Paginator