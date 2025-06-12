import { ADD_TODO, TOGLE_TODO, SET_FILTER } from "./actionTypes";

export const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        content
    }
})

const extraCondition = 1 > 2;
export const toggleTodo = (id) => ({
    type:TOGLE_TODO,
    payload: {
        id,
        todoNumber: extraCondition
    }
})

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: {
        filter
    }
})