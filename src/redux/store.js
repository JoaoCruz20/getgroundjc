import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./BookSlice";

export default configureStore({
    reducer : {
        books: bookReducer,
    }
})