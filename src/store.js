import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/paste.js'

export const store = configureStore({
  reducer: {
    paste:pasteReducer
  },
})