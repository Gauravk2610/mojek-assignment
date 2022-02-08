import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light'
}

export const darkSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
        if (state.mode === 'light') {
            state.mode = 'dark'
        }else {
            state.mode = 'light'
        }
    },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = darkSlice.actions

export default darkSlice.reducer