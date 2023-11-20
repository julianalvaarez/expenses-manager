import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";
import { loginWithEmailPassword } from "../../firebase/providers";
import { startGoogleSignIn } from "../../store/auth";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const formData = { email: "", password: "" };

export const LoginPage = () => {
  // Seleccionar el estado de autenticación desde Redux.
  const { status, errorMessage } = useSelector((state) => state.auth);

  // Obtener el despachador de acciones de Redux.
  const dispatch = useDispatch();

  // Extraer funciones y datos del formulario personalizado.
  const { email, password, onInputChange, onResetForm } = useForm(formData);

  // Utilizar useMemo para determinar si el estado es "Checking" (autenticándose).
  const isAuthenticating = useMemo(() => status === "Checking", [status]);

  // Función que maneja el envío del formulario de inicio de sesión.
  const onSubmit = (e) => {
    e.preventDefault();

    // Despachar la acción de inicio de sesión con correo y contraseña.
    dispatch(loginWithEmailPassword(email, password));

    // Limpiar el formulario después del envío.
    onResetForm();
  };

  // Función que maneja la autenticación con Google.
  function onGoogleSignIn() {
    // Despachar la acción para iniciar sesión con Google.
    dispatch(startGoogleSignIn());
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen mx-4">
      <h4 className="font-semibold text-2xl text-white mb-4">Log-In</h4>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 py-6  mb-4 "
      >
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
            placeholder="Correo electrónico"
          />
        </div>
        <div >
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
            placeholder="Contraseña"
          />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row items-center justify-between mt-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Iniciar sesión
          </button>
          <button onClick={onGoogleSignIn} className="flex items-center gap-2 border py-1 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200"><span>Google</span><FcGoogle/></button>
        </div>
          <Link
            to="/auth/register"
            className="inline-block align-baseline font-bold text-sm text-blue-500 active:text-blue-800 hover:underline active:underline float-right mt-4 -m-4"
          >
            Crear una cuenta
          </Link>
      </form>
    </div>
  );
};
