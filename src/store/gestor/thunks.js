import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addEarning, addExpense, setLoadMovements } from "./gestorSlice";
import { loadMovements } from "../../helpers/loadMovements";

export const startNewExpense = (expenseTitle, expenseAmount, expenseCategory, fechaFormateada) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        console.log('asda')

        // Crear una nueva nota con valores iniciales
        const newNote = {
            title: expenseTitle,
            category: expenseCategory,
            amount: expenseAmount,
            date: fechaFormateada,
            type: 'expense'
        };

        // Crear un nuevo documento en la colección de notas del usuario
        const newDoc = doc(collection(FirebaseDB, `${uid}/gestor/movements`));
        await setDoc(newDoc, newNote);

        // Asignar el ID del nuevo documento a la nota y despachar acciones
        newNote.id = newDoc.id;
        dispatch(addExpense(newNote));
    };
};


export const startNewEearning = (earningTitle, earningAmount, earningCategory, fechaFormateada) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        // Crear una nueva nota con valores iniciales
        const newNote = {
            title: earningTitle,
            category: earningCategory,
            amount: earningAmount,
            date: fechaFormateada,
            type: 'earning'
        };

        // Crear un nuevo documento en la colección de notas del usuario
        const newDoc = doc(collection(FirebaseDB, `${uid}/gestor/movements`));
        await setDoc(newDoc, newNote);

        // Asignar el ID del nuevo documento a la nota y despachar acciones
        newNote.id = newDoc.id;
        dispatch(addEarning(newNote));
    };
};

export const startLoadingMovements = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        // Cargar notas del usuario y despachar la acción para establecer las notas en el estado
        const {earnings, expenses} = await loadMovements(uid);
        dispatch(setLoadMovements({earnings, expenses}));
    };
};