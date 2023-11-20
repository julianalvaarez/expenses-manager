import { useContext } from "react";
import { AddCategory, BalanceChart, GestorList } from "../components";
import { GestorContext } from "../context";

export const BalancePage = () => {
  const { totalEarnings, totalExpenses } = useContext(GestorContext);
  console.log({totalEarnings, totalExpenses});
  return (
    <main className="flex flex-col">

      <div className="h-2/4 flex flex-col lg:flex-row lg:items-center lg:h-calcHeight">
        {totalEarnings === 0 && totalExpenses === 0 
          ? (
            <div className="font-semibold text-white border text-sm md:text-base m-auto p-2 rounded-md">
              <span>There are no expenses or income recorded.</span>
            </div>
          ) 
          : (
            <div className="lg:flex-1">
              <BalanceChart />
            </div>
          )
        }
        {totalEarnings !== 0 || totalExpenses !== 0 ? <GestorList /> : null  }
      </div>
      {/* <AddCategory /> */}
      
    </main>
  );
};
