import { configureStore, combineReducers } from "@reduxjs/toolkit";
import login from "./login";
import localStorage from "./middleware/localStorage";
import photos from "./photos";

const reducer = combineReducers({
  login,
  photos,
});

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(localStorage);

const store = configureStore({ reducer, middleware });

export default store;
