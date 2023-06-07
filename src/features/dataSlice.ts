import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { DataProps } from '../context/DataContext'
import axios from 'axios'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../firebase'

export interface DataFeedback {
  id: string
  issue: string
  content: string
}
interface DataState {
  data2: DataProps[]
  error: string | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  dataFeedback: DataFeedback[]
}

const initialState: DataState = {
  data2: [],
  error: null,
  status: 'idle',
  dataFeedback: [{ id: '', issue: '', content: '' }]
}

export const fetchData = createAsyncThunk('view/fetchData', async () => {
  const listData: any = []
  const query = await getDocs(collection(db, 'contract'))

  query.docs.forEach((doc) => {
    listData.push(doc.data())
  })
  return listData
})

export const fetchFeedback = createAsyncThunk('view/users', async () => {
  const listData: any = []
  const query = await getDocs(collection(db, 'users'))

  query.docs.forEach((doc) => {
    listData.push(doc.data())
  })
  return listData
})

export const dataSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data2 = action.payload
    })
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = 'failed'
    })
    builder.addCase(fetchFeedback.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchFeedback.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.dataFeedback = action.payload
    })
    builder.addCase(fetchFeedback.rejected, (state, action) => {
      state.status = 'failed'
    })
  }
})

export default dataSlice.reducer
