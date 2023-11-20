import { Navigate, Route, Routes } from "react-router-dom"
import { GestorRouter } from "../gestor/routes/GestorRouter"
import { AuthRouter } from "../auth/routes/AuthRouter"
import { useCheckAuth } from "../hooks/useCheckAuth"

export const RouterApp = () => {
  const status = useCheckAuth()


  return (
    <>
      <Routes>
        {
          status === "authenticated"
          ? <Route path="/*" element={<GestorRouter />} />
          : <Route path="/*" element={<AuthRouter />} />
        }

        {/* <Route path="/*" element={<Navigate to='/auth' />} /> */}
      </Routes>
    </>
  );
}
