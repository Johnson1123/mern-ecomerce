import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const slideApi = createApi({
    reducerPath: 'SlideApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
        endpoints: (builder) => ({
            getAllBanners: builder.query({
                query: () => 'slide',
            }),   
    }),
});

export const { useGetAllBannersQuery } = slideApi; 