import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    endpoints: (builder) => ({
        getAllCategory: builder.query({
            query: () => 'category'
        })
    })
})

export const { useGetAllCategoryQuery } = categoryApi;