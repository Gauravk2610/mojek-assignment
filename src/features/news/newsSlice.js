import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  news: [],
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNews: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
 
        console.log(action.payload)
        state.news = action.payload
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { getNews } = newsSlice.actions

export default newsSlice.reducer