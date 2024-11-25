import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    uuid:string;
    isAuth:boolean

}

type userState = {
    users:User


}

const initialState : User = {
    uuid:"",
    isAuth:false
}

export const UserAuthSlice  = createSlice({
    name:"user-auth",
    initialState,
    reducers:{
        logIn:(state, action:PayloadAction<{uuid:string}>) =>{
            state.isAuth = true
            state.uuid = action.payload.uuid
        },
        logOut: () => initialState
        
    }
})

export default UserAuthSlice.reducer
export const {logIn,logOut}  = UserAuthSlice.actions