import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredential, login, logout } from "./"

export const checkingAuthentication = (email) => {
    return async (dispatch) => {
        // Envia la acción de verificar credenciales con el correo electrónico
        dispatch(checkingCredential({email}))
    }
}


export const startGoogleSignIn = () => {
    return async (dispatch) => {
        // Envia la acción de verificar credenciales
        dispatch(checkingCredential())

        // Inicia el proceso de inicio de sesión con Google
        const result = await signInWithGoogle()
        if (!result.ok) return dispatch(logout(result.errorMessage))

        // Envia la acción de inicio de sesión con los datos del usuario
        dispatch(login(result))
    }
}



export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        // Envia la acción de verificar credenciales
        dispatch(checkingCredential())

        // Inicia el proceso de creación de usuario con correo y contraseña
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword(email, password, displayName)

        // Si hay un error, envía la acción de cierre de sesión con el mensaje de error
        if (!ok) return dispatch(logout({errorMessage}))

        // Envia la acción de inicio de sesión con los datos del nuevo usuario
        dispatch(login({uid, displayName, email, photoURL}))
    }
}


export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        // Envia la acción de verificar credenciales
        dispatch(checkingCredential())

        // Inicia el proceso de inicio de sesión con correo y contraseña
        const result = await loginWithEmailPassword({email, password})

        // Si hay un error, envía la acción de cierre de sesión con el mensaje de error
        if (!result.ok) return dispatch(logout(result))

        // Envia la acción de inicio de sesión con los datos del usuario
        dispatch(login(result))
    }
}


export const startLogout = () => {
    return async (dispatch) => {
        // Inicia el proceso de cierre de sesión en Firebase
        await logoutFirebase()

        // Envia la acción de cierre de sesión
        dispatch(logout({}))
    }
}


