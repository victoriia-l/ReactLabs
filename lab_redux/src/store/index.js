import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import usersReducer from "./reducers/usersReducer";
import thunk from "redux-thunk";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
});