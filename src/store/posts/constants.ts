import {Post} from "./interface";

export const ACTION_UPDATE_POSTS = 'ACTION_UPDATE_POSTS';
export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';

export const initialState = {
    posts: [],
    post: {} as Post,
};
