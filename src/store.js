import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './features/todoSlice'
import filtersReducer from './features/filtersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
})

export default store
