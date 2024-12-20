
import { configureStore } from "@reduxjs/toolkit";
import { UserAuthSlice } from "./features/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        userAuth:UserAuthSlice.reducer
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector