import React, {Dispatch, useEffect, useReducer} from "react";
import {Link} from "react-router-dom";
import Reducer from "../../store/posts/reducer";
import {initialState} from "../../store/posts/constants";
import getPosts from "../../api/posts/getPosts";
import {Post, State} from "../../store/posts/interface";
import {Action} from "../../store/interface";
import {updatePostsAction} from "../../store/posts/actions";
import './style.css';
import {limitLength} from "../../utils/string";

export default function PostsPage() {
    const [state, dispatch]: [State, Dispatch<Action<Post[]>>] = useReducer(Reducer, initialState);

    const updatePosts = () => {
        localStorage.removeItem('posts');
        getPosts().then(response => {
            updatePostsAction(dispatch, response);
            localStorage.setItem('posts', JSON.stringify(response));
        })
    };

    useEffect(() => {
        const updatePostsInterval = setInterval(updatePosts, 300000);
        updatePosts();

        return () => {
            clearInterval(updatePostsInterval);
        }
    }, []);

    return (
        <div>
            {state.posts.map((post: Post) => {
                return (
                    <Link to={`/post/${post.id}`} key={post.id}>
                        <h4>{post.title}</h4>
                        <p> {limitLength(post.body, 100)}</p>
                    </Link>
                )
            })}
        </div>
    );
}
