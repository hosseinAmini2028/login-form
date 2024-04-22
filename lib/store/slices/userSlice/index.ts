import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "services/auth";

const initialState : UserSliceState = typeof window === 'undefined' || typeof document === 'undefined' ? {
    user: null,
    token : null
  } : {
    user : JSON.parse(localStorage.getItem('user_info')?.valueOf() ?? '{}'),
    token :  JSON.parse(localStorage.getItem('user_token')?.valueOf() ?? 'null'),
  }
export const userSlice = createSlice({
    name : 'user',
    initialState ,
    reducers : {
        userLogin : (state , action : PayloadAction<{token : string,userInfo : UserInfo}>)=>{
          state.token = action.payload.token;
          state.user = action.payload.userInfo;

          localStorage.setItem('user_token',JSON.stringify(action.payload.token));
          localStorage.setItem('user_info',JSON.stringify(action.payload.userInfo));
        }
    }
});

export type UserSliceState = {
    token : string | null;
    user : UserInfo | null;
}