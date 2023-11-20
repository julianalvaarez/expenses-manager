import { useContext } from "react";
import { GestorContext } from "../../context";
import { GestorListItem } from "./";
import { useSelector } from "react-redux";

export const ExpensesList = () => {
  const {expenses} = useSelector(state => state.gestor)
  const { totalExpenses } = useContext(GestorContext);
  if (totalExpenses !== 0)
    return (
      <div className="flex-1">
        <div className="text-white mx-auto px-5 py-5 border rounded-md my-6 lg:w-7/12 ">
          <h4 className="font-bold text-2xl">MOVEMENTS</h4>
          <ul className="flex flex-col gap-3 mt-4">
            {expenses.map((expense) => (
              <GestorListItem key={Math.random()} data={expense} />
            ))}
            <li className="text-white font-semibold ">
             Total Expenses: ${totalExpenses}
            </li>
          </ul>
        </div>
      </div>
    );
};
