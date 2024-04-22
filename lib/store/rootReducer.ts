import { authApi } from "services/auth";
import { userSlice } from "./slices/userSlice";

export const reducer = {
    [authApi.reducerPath] : authApi.reducer,
    user : userSlice.reducer
}