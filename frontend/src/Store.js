import {configureStore} from '@reduxjs/toolkit';
import newsReducer from "./redux/NewsSlices.js"

export const store = configureStore({
    reducer : newsReducer
});