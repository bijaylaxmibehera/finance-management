import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../action/actions";
import { TransactionTable } from "../components/TransactionTable";

export const Expenses = () => {
  const dispatch=useDispatch();
  const expenses=useSelector((state)=>state.expenses.expenses);
  const loading=useSelector((state)=>state.loading);
 
  useEffect(()=>{
    dispatch(fetchExpenses());
  },[dispatch]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-3 text-xl font-medium">Expenses</h1>
      {loading ? (
        <p className="text-lg text-red-500">Loading...</p>
      ) : (
        <TransactionTable
          transactions={expenses}
          transactionsType={"expenses"}
        />
      )}
    </div>
  );
};
