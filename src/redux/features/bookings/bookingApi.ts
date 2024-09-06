
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api' }),
  tagTypes: ['bookings'],
  endpoints: (builder) => ({

    getProducts:builder.query({
      query:()=>({
        method:'GET',
        url:'/bookings',
      }),
      providesTags:['bookings'],
    }),
  })

})

export const {} = baseApi



