import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../mySong';

interface RecordState {
  value: Song[];
}

const initialState: RecordState = {
  value: [],
};

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addPlaylist: (state, action: PayloadAction<Song>) => {
      state.value.push(action.payload);
    },
    deletePlaylist: (state, action: PayloadAction<number>) => {
      const index = state.value.findIndex(
        (record) => record.stt === action.payload,
      );
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const { addPlaylist, deletePlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
