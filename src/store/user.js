import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userSlice = createApi({
    reducerPath:'users',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8080/'}),
    endpoints:(build)=>({
        getUsers:build.query({
            query:(filter)=>`users?${filter.gender !=='all'?`gender=${filter.gender}&`:''}`
        }),
        addUser:build.mutation({
            query:(arg)=>({
                url:'users',
                method: 'POST',
                body:arg
            })
        })
    })
})

export const {useGetUsersQuery,useAddUserMutation} = userSlice