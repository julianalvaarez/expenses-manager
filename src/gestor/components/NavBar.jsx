import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { startLogout } from "../../store/auth";
import { setClearMovements } from "../../store/gestor/gestorSlice";
export const NavBar = () => {
  const dispatch = useDispatch()
  const { displayName } = useSelector((state) => state.auth);
  function logout() {
    dispatch(startLogout())
    dispatch(setClearMovements())
  }
  return (
    <header>
      <nav className="flex flex-col items-center w-full p-4 py-6 text-slate-200 font-semibold bg-slate-900">
        <div className="flex justify-between mb-6 w-full items-center md:px-12 lg:mx-20 ">
          <span className="font-semibold text-lg lg:text-xl">{displayName}</span>
          <TbLogout onClick={logout} className="text-2xl lg:text-3xl hover:text-slate-400 active:text-slate-700 cursor-pointer" />
        </div>
        <NavLink className="text-xl" to="/">
          Expense Manager
        </NavLink>
        <div className="w-full flex justify-around mt-3">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "border-b-2 border-slate-200" : ""}`
            }
            to="/gastos"
          >
            Expenses
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "border-b-2 border-slate-200" : ""}`
            }
            to="/"
          >
            Balance
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "border-b-2 border-slate-200" : ""}`
            }
            to="/ganancias"
          >
            Earnings
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
