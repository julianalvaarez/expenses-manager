import { createSlice } from '@reduxjs/toolkit';

export const gestorSlice = createSlice({
    name: 'gestor',
    initialState: {
        expenses: [],
        earnings: [],
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        addEarning: (state, action) => {
            state.earnings.push(action.payload);
        },
        setLoadMovements: (state, action) => {
            state.earnings = action.payload.earnings;
            state.expenses = action.payload.expenses;
        },
        setClearMovements: (state) => {
            state.earnings = [];
            state.expenses = [];
        },
    }
});


export const { addExpense, addEarning, setLoadMovements, setClearMovements } = gestorSlice.actions;