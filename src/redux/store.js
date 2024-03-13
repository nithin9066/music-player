import { configureStore } from '@reduxjs/toolkit'
import playerReducer  from './PlayerSlice'

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
})