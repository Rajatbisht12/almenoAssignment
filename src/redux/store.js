import { configureStore } from "@reduxjs/toolkit"
import studentDetails from "./slice/studentDetails";

export const store = configureStore({
    reducer: {
        student : studentDetails,
    },
});