export const TransactionTable = ({ transactions, transactionsType }) => {
  if (!transactions) {
    return <div>No transactions available.</div>;
  }

  return (
    <>
      <table>
        <thead>
          <tr  className="*:px-6 *:py-3 *:text-left *:text-xs *:font-medium *:text-gray-700 *:uppercase *:tracking-wider border-y-[1px] border-slate-600">
            <th>Serial no.</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <>
                <tr key={transaction._id}  className="*:px-6 *:py-4 *:whitespace-nowrap">
                  <td>{index + 1}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                </tr>
              </>
            );
          })}
          <tr className="*:px-6 *:py-4 *:whitespace-nowrap border-t-[1px] border-slate-600">
            <td>Total {transactionsType}:</td>
            <td>${transactions.reduce((acc, curr) => acc + curr.amount, 0)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
