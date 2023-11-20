import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadMovements = async (uid = '') => {
    // Verificar si el UID del usuario está presente.
    if (!uid) {
        throw new Error('El UID del usuario no existe');
    }

    // Crear una referencia a la colección de notas específica del usuario en Firestore.
    const collectionRef = collection(FirebaseDB, `${uid}/gestor/movements`);

    try {
        // Obtener documentos de la colección.
        const docs = await getDocs(collectionRef);

        const movements = [];
        
        // Iterar sobre los documentos y agregarlos al array de notas.
        docs.forEach(doc => {
            movements.push({ id: doc.id, ...doc.data() });
        });
        
        const earnings = movements.filter(movement => movement.type === 'earning');
        const expenses = movements.filter(movement => movement.type === 'expense');

        return {earnings, expenses};
    } catch (error) {
        // Manejar cualquier error durante el proceso y lanzar una nueva excepción.
        throw new Error(`Error al cargar las notas: ${error.message}`);
    }
};