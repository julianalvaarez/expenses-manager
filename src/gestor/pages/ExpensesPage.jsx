import { AddExpense, ExpensesChart, ExpensesList } from "../components";

export const ExpensesPage = () => {

  return (
    <div>
      {/* Form para agregar gastos */}
        <AddExpense />
      
      <div className="flex flex-col lg:flex-row p-4 lg:items-center justify-center">
        {/* Chart de balance de gastos */}
          <ExpensesChart />
        {/* Lista de gastos  */}
          <ExpensesList />
      </div>
    </div>
  );
};
