import { configureStore } from '@reduxjs/toolkit'
import viewReducer from '../features/layoutSlice'
import playlistSlice from '../features/playlistSlice'
import recordSlice from '../features/recordSlice'
import dataSlice from '../features/dataSlice'

export const store = configureStore({
  reducer: {
    view: viewReducer,
    playlist: playlistSlice,
    record: recordSlice,
    data: dataSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
