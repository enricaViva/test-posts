import {Action} from "../interface";
import {ACTION_UPDATE_POST, ACTION_UPDATE_POSTS, initialState} from "./constants";
import {Post, State} from "./interface";

function Reducer(state: State = initialState, action: Action<any>): State {
    const newState: State = {
        posts: [],
        post: {} as Post,
    };
    switch (action.type) {
        case ACTION_UPDATE_POSTS:
            newState.posts = action.payload;
            break;
        case ACTION_UPDATE_POST:
            newState.post = action.payload;
            break;
        default:
            return state;
    }
    return {
        ...state,
        ...newState,
    }
}

export default Reducer;