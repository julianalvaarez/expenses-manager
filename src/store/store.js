import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { gestorSlice } from './gestor/gestorSlice'


// Configura el store
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    gestor: gestorSlice.reducer,
  },
})