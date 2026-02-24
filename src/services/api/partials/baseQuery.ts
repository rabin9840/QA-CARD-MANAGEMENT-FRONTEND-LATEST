// import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Cookies } from 'react-cookie';
// import { createBrowserHistory } from 'history';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cookies } from 'react-cookie';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import config from '@/config/app';

const cookies = new Cookies();

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_ACTIVITY_LOG_API_URI}/api/v1/`,
    prepareHeaders: async (headers) => {
        const cookieValuePromise = cookies.get('access_token');
        const testAccessToken = import.meta.env.VITE_APP_TEST_TOKEN;
        const [cookieValue] = await Promise.all([cookieValuePromise]);
        if (cookieValue) {
            headers.set('Authorization', `Bearer ${cookieValue}`);
        } else {
            headers.set('Authorization', `Bearer ${testAccessToken}`);
        }
        headers.set('Accept', 'application/json');
        return headers;
    },
});

// const baseQueryWithReauth: typeof baseQuery = async (args, api, extraOptions) => {
//     const result = await baseQuery(args, api, extraOptions);

//     if (result.error) {
//         if (result.error.status === 401) {
//             history.push('/'); // Adjust to your respective route
//         } else if (result.error.status === 404) {
//             // history.push('/404'); // Adjust to your 404 route
//         }
//     }

//     return result;
// };

const redirectToLogin = () => {
    cookies.remove('access_token', { path: '/' });
    window.location.href = '/sso';
};
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        redirectToLogin();
    }
    return result;
};

export default baseQueryWithReauth;

export const basePlanQuery = fetchBaseQuery({
    baseUrl: `${config.PLAN_MODULE_API_URI}/api/v1/`,
    prepareHeaders: async (headers) => {
        headers.set('Accept', 'application/json');
        return headers;
    },
});
