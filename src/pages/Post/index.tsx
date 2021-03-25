import React, {useEffect, useReducer} from "react";
import { useParams } from "react-router-dom";
import Reducer from "../../store/posts/reducer";
import {initialState} from "../../store/posts/constants";
import getPost from "../../api/posts/getPost";
import {updatePostAction} from "../../store/posts/actions";
import './style.css';

interface PostParams {
    id: string
}

export default function Post() {
    let { id } = useParams<PostParams>();
    const [state, dispatch] = useReducer(Reducer, initialState);

    const updatePost = () => {
        getPost(id).then(response => {
            updatePostAction(dispatch, response);
        })
    };

    useEffect(() => {
        const updatePostsInterval = setInterval(updatePost, 300000);
        updatePost();

        return () => {
            clearInterval(updatePostsInterval);
        }
    }, []);

    return (
        <div>
            <h1>{state.post.title}</h1>
            <p>{state.post.body}</p>
        </div>
    );
}
