import { baseApi } from "@/redux/api/baseApi";

export const roomsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllrooms: builder.query({
          query: () => ({
            url: '/rooms',
            method: 'GET',
          }),
        }),
        getArooms: builder.query({
          query: () => ({
            url: '/rooms/:id',
            method: 'GET',
          }),
        }),
        createrooms: builder.mutation({
          query: (data) => ({
            url: '/rooms',
            method: 'POST',
            body:data,
          }),
        }),
        updaterooms: builder.mutation({
          query: () => ({
            url: '/rooms/:id',
            method: 'PUT',
          }),
        }),
        deleteArooms: builder.mutation({
          query: () => ({
            url: '/rooms/:id',
            method: 'DELETE',
          }),
        }),
      }),
})

