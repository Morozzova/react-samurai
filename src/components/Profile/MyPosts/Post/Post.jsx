import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={props.avatar} />
            {props.text}
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
    )
}

export default Post;