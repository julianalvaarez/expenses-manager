import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { startLoadingMovements } from "../store/gestor/thunks";

export const useCheckAuth = () => {
  // Obtener el estado de autenticación desde el store de Redux.
  const { status } = useSelector((state) => state.auth);
  
  // Obtener la función `dispatch` del store de Redux.
  const dispatch = useDispatch();

  // Efecto secundario que se ejecuta al montar el componente.
  useEffect(() => {
    // Observar cambios en el estado de autenticación usando la función `onAuthStateChanged`.
    // Esta función se ejecuta cada vez que cambia el estado de autenticación.
    onAuthStateChanged(FirebaseAuth, async (user) => {
      // Si no hay un usuario autenticado, realizar el logout.
      if (!user) return dispatch(logout());

      // Si hay un usuario autenticado, realizar el login y cargar las notas.
      dispatch(login(user));
      dispatch(startLoadingMovements());

    }, 
    // Asegurarse de que el efecto secundario se ejecute solo una vez al montar el componente.
    // Pasar un array vacío como dependencia garantiza que el efecto se ejecute una vez al inicio.
    []);
  }, [dispatch]); // La dependencia es la función `dispatch`.

  // Devolver el estado de autenticación.
  return status;
};
