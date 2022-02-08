import { configureStore } from '@reduxjs/toolkit'
import accountSlice from '../features/account/accountSlice'
import darkSlice from '../features/dark/darkSlice'
import newsSlice from '../features/news/newsSlice'

export const store = configureStore({
  reducer: {
      account: accountSlice,
      news: newsSlice,
      theme: darkSlice
  },
})