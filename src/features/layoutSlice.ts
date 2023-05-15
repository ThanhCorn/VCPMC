import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ViewState {
  isListView: boolean;
}

const initialState: ViewState = {
  isListView: true,
};

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setListView: (state, action: PayloadAction<boolean>) => {
      state.isListView = true;
    },
    setGridView: (state, action: PayloadAction<boolean>) => {
      state.isListView = false;
    },
  },
});

export const { setListView, setGridView } = viewSlice.actions;
export default viewSlice.reducer;
