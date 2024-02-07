import {configureStore} from '@reduxjs/toolkit'
import kanbanBoard from './slices/kanban-board'


export const store = configureStore({

reducer:{
"kanban":kanbanBoard
}


});



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch