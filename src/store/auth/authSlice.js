import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    // Nombre del slice
    name: 'auth',
    // Estado inicial del slice
    initialState: {
      status: 'Checking', // Estado inicial de autenticación
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: null,
    },
    // Reductores (funciones que modifican el estado)
    reducers: {
      // Reductor para el inicio de sesión
      login: (state, { payload }) => {
        state.status = 'authenticated'; // Cambia el estado a autenticado
        state.uid = payload.uid;
        state.email = payload.email;
        state.displayName = payload.displayName;
        state.photoURL = payload.photoURL;
        state.errorMessage = null;
      },
      // Reductor para el cierre de sesión
      logout: (state, { payload }) => {
        state.status = 'not-authenticated'; // Cambia el estado a no autenticado
        state.uid = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
        state.errorMessage = payload?.errorMessage;
      },
      // Reductor para verificar las credenciales (por ejemplo, en proceso de autenticación)
      checkingCredential: (state, action) => {
        state.status = 'Checking'; // Cambia el estado a verificación
        state.email = action.payload?.email;
      },
    },
  });
  
  // Exporta acciones generadas por createSlice
  export const { login, logout, checkingCredential } = authSlice.actions;