import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchSavings } from "../action/actions";
import { TransactionTable } from "../components/TransactionTable";

export const Savings = () => {
  const dispatch=useDispatch();
  const savings=useSelector((state)=>state.savings.savings);
  const loading=useSelector((state)=>state.loading);

  useEffect(()=>{
    dispatch(fetchSavings());
  },[dispatch])

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-3 text-xl font-medium">Savings</h1>
      {loading ? (
        <p className="text-lg text-red-500">Loading...</p>
      ) : (
        <TransactionTable
          transactions={savings}
          transactionsType={"savings"}
        />
      )}
    </div>
  );
};
