import { Route, Routes } from "react-router-dom"
import { BalancePage, ExpensesPage, EarningsPage } from "../pages"
import { GestorModal, NavBar } from "../components"
import { useContext } from "react"
import { GestorContext } from "../context"

export const GestorRouter = () => {
  const {isModalOpen} = useContext(GestorContext)
  return (
    <div className="bg-slate-900">
      <NavBar />
      {isModalOpen && <GestorModal />}
      <Routes>
        <Route path="/*" element={<BalancePage />} />
        <Route path="/ganancias" element={<EarningsPage />} />
        <Route path="/gastos" element={<ExpensesPage />} />
      </Routes>   
    </div>
  )
}
