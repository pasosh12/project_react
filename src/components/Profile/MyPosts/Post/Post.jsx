import classes from "./Post.module.css";
console.log(classes);

const Post = () => {
    return (
        <div className={classes.item}>
            <img className={`${classes.item} ${classes.img}`} src="https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"></img>
            text
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;