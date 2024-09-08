import { baseApi } from "@/redux/api/baseApi";

export const bookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
      getAllbookings: builder.query({
        query: () => ({
          url: '/bookings',
          method: 'GET',
        }),
      }),
      createAbooking: builder.mutation({
        query: (data) => ({
          url: '/bookings',
          method: 'POST',
          body:data,
        }),
      }),
      getUserbooking: builder.query({
        query: () => ({
          url: '/my-bookings',
          method: 'GET',
        }),
      }),
      updateBookings: builder.mutation({
        query: () => ({
          url: '/bookings/:id',
          method: 'PUT',
        }),
      }),
      deleteAbookings: builder.mutation({
        query: () => ({
          url: '/rooms/:id',
          method: 'DELETE',
        }),
      }),
    }),
})


