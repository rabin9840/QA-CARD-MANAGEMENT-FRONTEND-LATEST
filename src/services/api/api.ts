import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from '../api/partials/baseQuery';

export const fetchApi = createApi({
    reducerPath: 'fetchApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Cards'],
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: ({ url, params }) => ({
                url,
                method: 'GET',
                params,
            }),
            providesTags: (_result, _error, arg) => {
                return arg.url.includes('card') ? ['Cards'] : [];
            },
        }),
        getDataById: builder.query({
            query: (url) => ({
                url,
                method: 'GET',
            }),
            providesTags: (_result, _error, url) => {
                return url.includes('card') ? ['Cards'] : [];
            },
        }),
        deleteData: builder.mutation({
            query: (url) => ({
                url,
                method: 'DELETE',
            }),
        }),
        createData: builder.mutation({
            query: ({ url, newData, token }) => {
                const headers: Record<string, string> = {};
                if (token) {
                    headers['Authorization'] = `Bearer ${token}`;
                }
                return {
                    url,
                    method: 'POST',
                    body: newData,
                    headers,
                };
            },
            invalidatesTags: (_result, _error, arg) => (arg.url.includes('card') ? ['Cards'] : []),
        }),
        updateData: builder.mutation({
            query: ({ url, updateData, token }) => {
                const headers: Record<string, string> = {};
                if (token) {
                    headers['Authorization'] = `Bearer ${token}`;
                }
                return {
                    url,
                    method: 'PUT',
                    body: updateData,
                    headers,
                };
            },
            invalidatesTags: (_result, _error, arg) => (arg.url.includes('card') ? ['Cards'] : []),
        }),
    }),
});

export const {
    useGetAllDataQuery,
    useLazyGetAllDataQuery,
    useGetDataByIdQuery,
    useDeleteDataMutation,
    useCreateDataMutation,
    useUpdateDataMutation,
} = fetchApi;
export const resetApiState = fetchApi.util.resetApiState;
