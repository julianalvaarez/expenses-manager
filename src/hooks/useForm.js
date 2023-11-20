import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
  
    // Estado del formulario
    const [formState, setFormState] = useState(initialForm);
  
    // Estado de validación del formulario
    const [formValidation, setFormValidation] = useState({});
  
    // Efecto secundario que se ejecuta cada vez que cambia el estado del formulario
    useEffect(() => {
      // Crear validadores basados en las reglas de validación proporcionadas
      createValidators();
    }, [formState]);
  
    // Efecto secundario que se ejecuta cuando cambian las reglas de validación
    useEffect(() => {
      // Restablecer el formulario cuando cambian las reglas de validación iniciales
      setFormState(initialForm);
    }, [initialForm]);
  
    // Función que determina si el formulario es válido
    const isFormValid = useMemo(() => {
      for (const formValue of Object.keys(formValidation)) {
        if (formValidation[formValue] !== null) return false;
      }
      return true;
    }, [formValidation]);
  
    // Función que maneja el cambio de entrada en el formulario
    const onInputChange = ({ target }) => {
      const { name, value } = target;
      // Actualizar el estado del formulario con la nueva entrada
      setFormState({
        ...formState,
        [name]: value
      });
    };
  
    // Función para restablecer el formulario a su estado inicial
    const onResetForm = () => {
      setFormState(initialForm);
    };
  
    // Función para crear validadores basados en las reglas de validación
    const createValidators = () => {
      const formCheckedValues = {};
      
      // Iterar sobre las reglas de validación y aplicar las funciones de validación
      for (const formField of Object.keys(formValidations)) {
        const [fn, errorMessage] = formValidations[formField];
  
        // Almacenar el resultado de la validación en el estado de validación
        formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
      }
  
      // Actualizar el estado de validación
      setFormValidation(formCheckedValues);
    };
  
    // Devolver el estado del formulario, funciones para interactuar con el formulario y el estado de validación
    return {
      ...formState,
      formState,
      onInputChange,
      onResetForm,
  
      ...formValidation,
      isFormValid
    };
  };