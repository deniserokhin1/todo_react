import { configureStore } from '@reduxjs/toolkit'
import { statusReducer } from './reducers/status'
import { todosReducer } from './reducers/todos'

export const store = configureStore({
  reducer: {
    todo: todosReducer,
    status: statusReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
