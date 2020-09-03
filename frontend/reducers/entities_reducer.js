import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import photosReducer from "./photos_reducer";
import followingsReducer from "./followings_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    photos: photosReducer,
    followings: followingsReducer
});

export default entitiesReducer;