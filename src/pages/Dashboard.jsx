import React, { useState } from "react";
import { UseSelector, useSelector } from "react-redux";

export const Dashboard = () => {
  const [reportType, setReportType] = useState("");
  const [report, setReport] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    savings: 0,
    expenseBreakdown: {},
  });

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
        const { description, amount } = transaction;
        if (expenseBreakdown[description]) {
          expenseBreakdown[description] += amount;
        } else {
          expenseBreakdown[description] = amount;
        }
      });
      setReport((prevState) => ({
        ...prevState,
        expenseBreakdown,
      }));
    }
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
      <button onClick={generateReport}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate report</button>
      {report.totalIncome > 0 && reportType === "incomeVsExpenses" && (
        <div>
          <h3>Report</h3>
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
          {Object.keys(report.expenseBreakdown).length > 0 &&
            reportType === "expenseBreakdown" && (
              <div>
                <h3>Expense Breakdown</h3>
                <ul>
                  {Object.keys(report.expenseBreakdown).map(
                    (description, index) => (
                      <li key={index}>
                        {description}:${report.expenseBreakdown[description]}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
        </div>
      )}
    </div>
  );
};
