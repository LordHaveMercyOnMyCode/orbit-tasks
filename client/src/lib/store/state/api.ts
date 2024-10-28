import { Task, User } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    }),
    reducerPath: "api",
    tagTypes: ["Users", "UserDetails", "Tasks"],
    endpoints: (build) => ({
        createUser: build.mutation<User, Partial<User>>({
            query: (user) => ({
                url: "users",
                method: "POST",
                body: user,
            }),
            invalidatesTags: [{ type: "Users", id: "LIST" }],
        }),
        getUsers: build.query<User[], void>({
            query: () => "users",
            providesTags: [{ type: "Users", id: "LIST" }],
        }),
        getUserById: build.query<User, { userId: number }>({
            query: ({ userId }) => `users?userId=${userId}`,
            providesTags: (result, error, { userId }) => [
                { type: "UserDetails", id: userId },
            ],
        }),
        addTask: build.mutation<Task, Partial<Task>>({
            query: (newTask) => ({
                url: `tasks?projectId=${newTask.projectId}`,
                method: "POST",
                body: newTask,
            }),
            invalidatesTags: (result, error, { projectId }) => [
                { type: "Tasks", id: projectId },
            ],
        }),
        getTasks: build.query<Task[], { projectId: number }>({
            query: ({ projectId }) => `tasks?projectId=${projectId}`,
            providesTags: (result, error, { projectId }) =>
                result
                    ? result.map(({ id }) => ({ type: "Tasks" as const, id }))
                    : [{ type: "Tasks" as const, id: projectId }],
        }),
    }),
});

export const { useCreateUserMutation, useGetUsersQuery, useGetUserByIdQuery } =
    api;
