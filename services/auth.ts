import { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export type UserLoginData = {
  username: string;
  password: string;
};

export type UserInfo = {
  id: number;
  phone: string;
  fullname: string;
  username: string;
  role: number;
  picture: string | null;
  gender: number;
};
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      Accept: 'application/json'
    }
  }),

  endpoints: (builder) => ({
    userLogin: builder.mutation<any, UserLoginData>({
      query(body) {
        return {
          url: '/users/login',
          method: 'POST',
          body: {
            ...body,
            device_name: 'test'
          }
        };
      }
    })
  })
});

export const { useUserLoginMutation } = authApi;

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: any) => {
  console.log({ action });
  if (action?.error?.message) {
    toast.error(action?.payload?.data?.message);
  } else {
    toast.success(action?.payload?.message);
  }
  return next(action);
};
