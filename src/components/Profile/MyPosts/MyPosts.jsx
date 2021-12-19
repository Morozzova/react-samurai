import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field as Field1, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import PostsFormFormik from "./MyPostsFormik";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
    let postsElements =
        [...props.postsData]
            .reverse()
            .map((p) => <Post text={p.text}
                              likes={p.likes}
                              avatar={p.avatar}
                              key={p.id}
                              id={p.id}/>)
    const addNewPost = (formData) => {
        props.addPost(formData.post);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <PostsReduxForm onSubmit={addNewPost}/>
            <PostsFormFormik addNewPost={addNewPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const PostsForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field1 placeholder={"Enter your text."} component={Textarea} name={"post"}
                        validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostsReduxForm = reduxForm({
    form: 'posts'
})(PostsForm);


export default MyPosts;