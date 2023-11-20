import { useContext, useState } from "react";
import { GestorContext } from "../../context";

export const AddCategory = () => {
  const { addCategory } = useContext(GestorContext);

  const [categoryType, setCategoryType] = useState("");
  const [newCategory, setNewCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newCategory === "" || categoryType === "") return;
    addCategory(newCategory, categoryType);
    setNewCategory("");
    const alert = document.getElementById("category-alert");
    alert.classList.add("alert-active");
    setTimeout(() => {
      alert.classList.remove("alert-active");
    }, 2000);
  }

  return (
    <div className="mx-3 flex justify-center  ">

      <form
        onSubmit={handleSubmit}
        className="flex flex-col border mx-auto md:mx-6 rounded-md py-8 w-4/5 md:w-1/3"
      >
        <span className="text-center text-xl font-semibold text-white mb-4">
          Add New Category
        </span>
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col xl:flex-row gap-4 mx-4 justify-around lg:gap-10 lg:mx-auto">
            <select
              className="bg-slate-900 border text-white rounded-md p-1  "
              value={categoryType}
              onChange={(e) => setCategoryType(e.target.value)}
            >
              <optgroup>
                <option value="" disabled selected>
                  Type
                </option>
                <option value="Gastos">Expenses</option>
                <option value="Ingresos">Earnings</option>
              </optgroup>
            </select>
            <input
              type="text"
              placeholder="New Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="bg-transparent border text-white placeholder:text-slate-300 rounded-md p-1 "
              required
            />
            <input
              type="submit"
              value="Add"
              className="bg-transparent font-semibold border text-white px-3 rounded-md py-1  mt-2 active:bg-slate-950"
            />
          </div>

          <span
            id="category-alert"
            className="hidden mx-auto bg-green-400 p-1 rounded-md font-medium my-2"
          >
            Categoria Agregada ✔
          </span>
        </div>
      </form>
    </div>
  );
};
