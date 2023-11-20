import { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const GestorContext = createContext();

export const GestorContextProvider= ({children}) => {
  const {expenses, earnings} = useSelector(state => state.gestor)

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalInfo, setModalInfo] = useState({})

  function openModal(data) {
    setModalInfo(data)
    setIsModalOpen(true)
  }

  // // Se almacenan todos los gastos e ingresos y el array de las categorias
  // const [expenses, setExpenses] = useState(() => {
  //   const storedExpenses = localStorage.getItem("expenses");
  //   return storedExpenses ? JSON.parse(storedExpenses) : [];
  // })
  // const [earnings, setEarnings] = useState(() => {
  //   const storedEarnings = localStorage.getItem("earnings");
  //   return storedEarnings ? JSON.parse(storedEarnings) : [];
  // })

  const expensesCategories = [ "Transport", "Sports", "Fixed Expenses", "Gifts", "Food", "Home", "Entertainment", "Family", "Others",];
  const earningsCategories = [ "Salary", "Interest", "Gift", "Jobs", "Other",];

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  useEffect(() => {
    localStorage.setItem("earnings", JSON.stringify(earnings));
  }, [earnings]);

  // Funcion para agregar categorias
  function addCategory(newCategory, categoryType) {
    if (categoryType === 'Gastos') expensesCategories.push(newCategory) 
    else earningsCategories.push(newCategory)
  }

  // Funciones para agregar gastos al estado
  function addExpense(expenseTitle, expenseAmount, expenseCategory, fechaFormateada) {
    setExpenses([
      {
        title: expenseTitle,
        category: expenseCategory,
        amount: expenseAmount,
        date: fechaFormateada,
    },
      ...expenses
    ]);
  }

  function addEarning(earningName, earningAmount, earningCategory, earningDay) {
    setEarnings([
      {
        category: earningCategory,
        name: earningName,
        amount: earningAmount,
        day: earningDay,
      },
      ...earnings
    ]);
  }

  // Funcion para sumar todos los montos de los arrays de expenses y earnings
  function addAmounts(arr) {
    return arr.reduce((total, item) => {
      const itemAmountValue = parseInt(item.amount);
      return isNaN(itemAmountValue) ? total : total + itemAmountValue;
    }, 0);
  }

  // Suma de todos los gastos y ganancias y balance total
  const totalExpenses = addAmounts(expenses);
  const totalEarnings = addAmounts(earnings);
  const totalBalance = totalEarnings - totalExpenses;
  
  
    return (
      <GestorContext.Provider value={{
        isModalOpen,
        setIsModalOpen,
        modalInfo,
        openModal,
        // expenses,
        // earnings,
        expensesCategories,
        earningsCategories,
        addCategory,
        addExpense,
        addEarning,
        addAmounts,
        totalExpenses,
        totalEarnings,
        totalBalance
      }}>
        {children}
      </GestorContext.Provider>
    );
  };
