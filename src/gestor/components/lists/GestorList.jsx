import { useContext } from "react";
import { GestorContext } from "../../context";
import { GestorListItem } from "./";
import { useSelector } from "react-redux";

export const GestorList = () => {
  const {earnings, expenses} = useSelector(state => state.gestor)
  const { totalBalance } = useContext(GestorContext);

  return (
    <>
      <div className="flex flex-col w-max mx-auto my-8 gap-5 lg:flex-1">

        <div className="text-white w-full mx-auto px-5 py-5 border rounded-md lg:w-7/12 ">
          <h4 className="font-bold text-2xl">EXPENSES</h4>
          <ul className="flex flex-col gap-3 mt-4">
            {
              expenses.length > 0 
              ? expenses.map( expense => <GestorListItem key={Math.random()} data={expense} /> )
              : <span className="font-semibold text-white border text-sm md:text-base m-auto p-2 rounded-md"> There are no expenses entered. </span>
            }
          </ul>
        </div>

        <div className="text-white w-full mx-auto px-5 py-5 border rounded-md lg:w-7/12">
          <h4 className="font-bold text-2xl">EARNINGS</h4>
          <ul className="flex flex-col gap-3 mt-4">
            {
              earnings.length > 0 
              ? earnings.map( earning => <GestorListItem key={Math.random()} data={earning} /> )
              : <li className="font-semibold text-white border text-sm md:text-base m-auto p-2 rounded-md"> There are no earnings entered. </li>
            }
          </ul>
        </div>

        <div className="text-white w-full mx-auto px-5 py-5 border rounded-md lg:w-7/12 font-bold text-xl">
          <span>Total Balance: ${totalBalance}</span>
        </div>

      </div>

    </>
  );
};
