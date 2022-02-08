import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  investments: [],
  portfolio: []
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    getInvestments: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
 
        console.log(action.payload)
        state.investments = action.payload
    },
    getPortfolio: (state, action) => {
        console.log(action.payload)
        state.portfolio = action.payload
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { getInvestments, getPortfolio } = accountSlice.actions

export default accountSlice.reducer