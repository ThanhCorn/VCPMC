import { configureStore } from '@reduxjs/toolkit'
import viewReducer from '../features/layoutSlice'
import playlistSlice from '../features/playlistSlice'
import recordSlice from '../features/recordSlice'

export const store = configureStore({
  reducer: {
    view: viewReducer,
    playlist: playlistSlice,
    record: recordSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
