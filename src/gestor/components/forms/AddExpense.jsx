import { useContext, useState } from "react";
import { GestorContext } from "../../context";
import { startNewExpense } from "../../../store/gestor/thunks";
import { useDispatch } from "react-redux";

export const AddExpense = () => {
  const dispatch = useDispatch()
  const { addExpense, expensesCategories: categories } =
    useContext(GestorContext);

  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");

  const fecha = new Date();

  // Obtiene el día, el mes y el año
  const day = fecha.getDate().toString().padStart(2, "0"); // Convierte a cadena y asegura que tenga 2 dígitos
  const month = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Se suma 1 al mes porque en JavaScript los meses van de 0 a 11
  const year = fecha.getFullYear().toString(); // Obtiene los últimos 2 dígitos del año

  // Formatea la fecha en el formato deseado (día/mes/año)
  const fechaFormateada = `${day}/${month}/${year}`;

  function handleSubmit(e) {
    e.preventDefault();
    // Obtén el valor del monto del campo de entrada
    const amount = parseFloat(expenseAmount);

    if (expenseCategory === "") return;

    // Valida que el monto no sea igual a 0
    if (amount === 0) {
      alert("El monto no puede ser igual a 0");
      return;
    }
    dispatch(startNewExpense(expenseTitle, expenseAmount, expenseCategory, fechaFormateada))
    setExpenseTitle("");
    setExpenseAmount(0);
    setExpenseCategory("");
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border mx-2 md:mx-6 rounded-md py-4"
      >
        <span className="text-center text-xl font-semibold text-white mb-4">
          Add Expense
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex justify-around lg:gap-10 lg:mx-10">
            <select
              value={expenseCategory}
              onChange={(e) => setExpenseCategory(e.target.value)}
              className="bg-slate-900 border text-white rounded-md p-1 w-5/12 lg:w-auto"
            >
              <optgroup>
                <option value="" disabled selected>
                  Category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </optgroup>
            </select>
            <input
              type="number"
              placeholder="Add your amount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(parseInt(e.target.value, 10))}
              required
              className="bg-transparent border text-white placeholder:text-slate-300 rounded-md p-1 w-3/6 lg:w-auto lg:flex-1"
            />
            <input
              type="text"
              placeholder="Add your expense"
              value={expenseTitle}
              onChange={(e) => setExpenseTitle(e.target.value)}
              className="hidden lg:flex bg-transparent border text-white placeholder:text-slate-300 rounded-md p-1 lg:flex-1"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Add your expense"
            value={expenseTitle}
            onChange={(e) => setExpenseTitle(e.target.value)}
            className="bg-transparent lg:hidden border text-white placeholder:text-slate-300 rounded-md p-1 mx-4 md:mx-10 mt-3"
            required
          />
          <input
            type="submit"
            value="Add"
            className="bg-transparent font-semibold border text-white px-3 rounded-md py-1 w-max mx-auto mt-2 md:text-lg md:px-4 hover:scale-105 transition active:bg-slate-950"
          />
        </div>
      </form>
    </>
  );
};
