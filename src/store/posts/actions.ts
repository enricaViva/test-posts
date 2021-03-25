import {Dispatch} from "react";
import {Action} from "../interface";
import {Post} from "./interface";
import {ACTION_UPDATE_POST, ACTION_UPDATE_POSTS} from "./constants";

export const updatePostsAction = (dispatch: Dispatch<Action<Post[]>>, payload: Post[]) => dispatch({
    type: ACTION_UPDATE_POSTS,
    payload,
});

export const updatePostAction = (dispatch: Dispatch<Action<Post>>, payload: Post) => dispatch({
    type: ACTION_UPDATE_POST,
    payload,
});