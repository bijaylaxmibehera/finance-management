import React, { useState } from "react";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const [reportType, setReportType] = useState("");
  const [report, setReport] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    savings: 0,
    expenseBreakdown: {},
  });
  const [showReport, setShowReport] = useState(false);

  const income = useSelector((state) => state.incomes.incomes);
  const expenses = useSelector((state) => state.expenses.expenses);

  const generateReport = () => {
    if (reportType === "incomeVsExpenses") {
      const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
      const totalExpenses = expenses.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );

      const savings = totalIncome - totalExpenses;
      setReport((prevState) => ({
        ...prevState,
        totalIncome,
        totalExpenses,
        savings,
      }));
    } else {
      const expenseBreakdown = {};
      expenses.forEach((transaction) => {
        const { category, amount } = transaction;
        if (expenseBreakdown[category]) {
          expenseBreakdown[category] += amount;
        } else {
          expenseBreakdown[category] = amount;
        }
      });
      setReport((prevState) => ({
        ...prevState,
        expenseBreakdown,
      }));
    }
    setShowReport(true);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="my-3 text-xl font-medium">Financial Report</h1>
      <div className="mb-4">
        <label className="mr-2">Select Report Type:</label>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="">Select a report type</option>
          <option value="incomeVsExpenses">Income Vs. Expnses</option>
          <option value="expenseBreakdown">Expense Breakdown</option>
        </select>
      </div>
      <button
        onClick={generateReport}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate report
      </button>
      {showReport && (
        <>
          <div className="bg-white px-10 py-6 my-10 rounded-sm">
            <h3 className="text-center text-lg font-medium mb-3">Report</h3>
            {report.totalIncome > 0 && reportType === "incomeVsExpenses" && (
              <div>
                <div>
                  <p>Total Income: ${report.totalIncome}</p>
                  <p>Total Expenses: ${report.totalExpenses}</p>
                  <div>
                    {report.savings < 0 ? (
                      <p>You are on debt.</p>
                    ) : (
                      <p>Savings: ${report.savings}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
            {Object.keys(report.expenseBreakdown).length > 0 &&
              reportType === "expenseBreakdown" && (
                <ul>
                  {Object.entries(report.expenseBreakdown).map(
                    ([category, amount], index) => (
                      <li key={index}>
                        <p>
                          {category}: ${amount}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              )}
          </div>
        </>
      )}
    </div>
  );
};
