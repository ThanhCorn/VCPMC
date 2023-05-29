import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { DataProps } from '../context/DataContext';
import axios from 'axios';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../firebase';

interface ViewState {
  isListView: boolean;
  data2: DataProps[];
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ViewState = {
  isListView: true,
  data2: [],
  error: null,
  status: 'idle',
};

export const fetchData = createAsyncThunk('view/fetchData', async () => {
  let listData: any = [];
  const query = await getDocs(collection(db, 'contract'));

  query.docs.forEach((doc) => {
    listData.push(doc.data());
  });
  return listData;
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data2 = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

export const { setListView, setGridView } = viewSlice.actions;
export default viewSlice.reducer;
