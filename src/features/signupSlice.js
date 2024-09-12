import { createSlice } from '@reduxjs/toolkit'


export const signUpSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
    },
    reducers:{
        signup:(state,action) =>{
            state.user = action.payload
        },
        logout:(state) =>{                              
            state.user = null;
        },
    },
})

export const {signup,logout} = signUpSlice.actions

export const selectUser = (state) => state.user.user

export default signUpSlice.reducer