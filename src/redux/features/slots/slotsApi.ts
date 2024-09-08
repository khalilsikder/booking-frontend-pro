import { baseApi } from "@/redux/api/baseApi";

export const slotsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createSlots: builder.mutation({
          query: (data) => ({
            url: '/slots',
            method: 'POSt',
            body: data,
          }),
        }),
        getSlots: builder.query({
          query: () => ({
            url: '/slots/availability',
            method: 'GET',
          }),
        }),
      }),
  })
  
  
  