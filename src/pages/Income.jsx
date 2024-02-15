import { useDispatch, useSelector } from "react-redux";
import { TransactionTable } from "../components/TransactionTable";
import { useEffect } from "react";
import { fetchIncome } from "../action/actions";
export const Income = () => {
  const dispatch = useDispatch();
  const incomes = useSelector((state) => state.incomes.incomes);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-3 text-xl font-medium">Incomes</h1>
      {loading ? (
        <p className="text-lg text-red-500">Loading...</p>
      ) : (
        <TransactionTable
          transactions={incomes}
          transactionsType={"income"}
        />
      )}
    </div>
  );
};
