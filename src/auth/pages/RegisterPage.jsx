import { Route, Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserWithEmailPassword } from "../../firebase/providers";

// En este bloque de código, se representa la página de registro en React, utilizando Material-UI, Redux y Firebase.

// Objeto con datos predeterminados para el formulario.
const formData = {
  email: "",
  password: "",
  displayName: "",
};

// Validaciones para cada campo del formulario.
const formValidations = {
  email: [(value) => value.includes("@"), "Email not valid."],
  password: [(value) => value.length >= 6, "Password must have 6 characters"],
  displayName: [(value) => value.length >= 1, "Name is required."],
};

// Componente funcional de la página de registro.
export const RegisterPage = () => {
  // Obtener el despachador de acciones de Redux.
  const dispatch = useDispatch();

  // Estado para controlar si el formulario se ha enviado.
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Seleccionar el estado de autenticación desde Redux.
  const { status } = useSelector((state) => state.auth);


  // Extraer funciones y datos del formulario personalizado.
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
  } = useForm(formData, formValidations);

  // Función que maneja el envío del formulario de registro.
  function onSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);

    // Verificar si el formulario es válido antes de enviar la acción de registro.
    if (!isFormValid) return;

    // Despachar la acción de registro con correo, contraseña y nombre.
    dispatch(registerUserWithEmailPassword(formState));
  }

  // Estructura JSX que representa el formulario de registro.
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        {/* Visualizar si el formulario es válido o no */}
        <h4 className="font-semibold text-2xl text-white ">Register</h4>
        <form
          onSubmit={onSubmit}
          className="bg-white shadow-md rounded-lg px-8 py-6 mb-4"
        >
          <div className="flex flex-col gap-5">
            {/* Campos de entrada para nombre completo, correo y contraseña */}
            <div>
              <label
                htmlFor="displayName"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                placeholder="Juan Perez"
                value={displayName}
                onChange={onInputChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="correo@gmail.com"
                value={email}
                onChange={onInputChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password123"
                value={password}
                onChange={onInputChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              />
            </div>

            {/* Botón de registro */}
            <input
              type="submit"
              value="Register"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
            />

            {/* Enlace para redirigir a la página de inicio de sesión */}
            <div>
              <span>¿You Have a Account?</span>
              <RouterLink
                to="/auth/login"
                className="text-blue-500 hover:underline"
              >
                Login
              </RouterLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
