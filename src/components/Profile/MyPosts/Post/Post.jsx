import classes from "./Post.module.css";


const Post = (props) => {

        return (
        <div className={classes.item}>
            <img className={`${classes.item} ${classes.img}`} src="https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"></img>
            {props.message}
            <p>Нравится {props.likesCount}</p>
        </div>
    );
}

export default Post;