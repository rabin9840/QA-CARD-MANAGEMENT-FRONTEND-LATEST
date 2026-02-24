import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from '../api/partials/baseQuery';
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: ({ url, credentials }) => ({
                url: `${url}`,
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useUserLoginMutation } = authApi;
export const resetApiState = authApi.util.resetApiState;
