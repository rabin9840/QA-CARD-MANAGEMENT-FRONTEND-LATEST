import { createApi } from '@reduxjs/toolkit/query/react';
import { basePlanQuery } from '../api/partials/baseQuery';

export const planModuleApi = createApi({
    reducerPath: 'planModuleApi',
    baseQuery: basePlanQuery,
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: ({ url, params }) => ({
                url,
                method: 'GET',
                params,
            }),
        }),
        getData: builder.query({
            query: (url) => ({
                url,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAllDataQuery, useLazyGetAllDataQuery, useGetDataQuery } = planModuleApi;
export const resetApiState = planModuleApi.util.resetApiState;
