import { configureStore } from '@reduxjs/toolkit'
import accountSlice from '../features/account/accountSlice'
import newsSlice from '../features/news/newsSlice'

export const store = configureStore({
  reducer: {
      account: accountSlice,
      news: newsSlice,
  },
})