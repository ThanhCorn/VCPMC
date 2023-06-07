import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mySong } from '../myData'
import { Song } from '../@types/myType'
interface RecordState {
  value: Song[]
}

const initialState: RecordState = {
  value: mySong
}

export const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<Song>) => {
      state.value.push(action.payload)
    },
    deleteRecord: (state, action: PayloadAction<number>) => {
      const index = state.value.findIndex((record) => record.stt === action.payload)
      if (index !== -1) {
        state.value.splice(index, 1)
      }
    }
  }
})

export const { addRecord, deleteRecord } = recordSlice.actions
export default recordSlice.reducer
