import { useContext, useState } from "react";
import { GestorContext } from "../../context";
import { useDispatch } from "react-redux";
import { startNewEearning } from "../../../store/gestor/thunks";

export const AddEarning = () => {
  const dispatch = useDispatch()
  const { addEarning, earningsCategories: categories } =
    useContext(GestorContext);

  const [earningTitle, setEarningTitle] = useState("");
  const [earningAmount, setEarningAmount] = useState("");
  const [earningCategory, setEarningCategory] = useState("");

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
    const amount = parseFloat(earningAmount);

    if (earningCategory === "") return;

    // Valida que el monto no sea igual a 0
    if (amount === 0) {
      alert("El monto no puede ser igual a 0");
      return;
    }
    dispatch(startNewEearning(earningTitle, earningAmount, earningCategory, fechaFormateada))
    setEarningTitle("");
    setEarningAmount(0);
    setEarningCategory("");
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border mx-2 md:mx-6 rounded-md py-4"
      >
        <span className="text-center text-xl font-semibold text-white mb-4">
          Add Earning
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex justify-around lg:gap-10 lg:mx-10">
            <select
              className="bg-slate-900 border text-white rounded-md p-1 w-5/12 lg:w-auto"
              value={earningCategory}
              onChange={(e) => setEarningCategory(e.target.value)}
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
              value={earningAmount}
              onChange={(e) => setEarningAmount(parseInt(e.target.value, 10))}
              className="bg-transparent border text-white placeholder:text-slate-300 rounded-md p-1 w-3/6 lg:w-auto lg:flex-1"
              required
            />
            <input
              type="text"
              placeholder="Add your earning"
              value={earningTitle}
              onChange={(e) => setEarningTitle(e.target.value)}
              className="hidden lg:flex bg-transparent border text-white placeholder:text-slate-300 rounded-md p-1 lg:flex-1"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Add your earning"
            className="bg-transparent lg:hidden border text-white placeholder:text-slate-300 rounded-md p-1 mx-4 mt-3"
            value={earningTitle}
            onChange={(e) => setEarningTitle(e.target.value)}
            required
          />
          <input
            type="submit"
            value="Add"
            className="bg-transparent font-semibold border text-white px-3 rounded-md py-1 w-max mx-auto mt-2"
          />
        </div>
      </form>
    </>
  );
};
