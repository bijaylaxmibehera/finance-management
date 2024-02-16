import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../action/actions";

export const IncomeExpenseFrom = () => {
  const dispatch = useDispatch();
  const initialState = {
    description: "",
    amount: 0,
    category:"",
    entryType: "income",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addEntry(formData));
    setFormData(initialState);
  };
  return (
    <>
      <h1 className="text-2xl font-medium mb-4 text-center">New Entry</h1>
      <form onSubmit={handleFormSubmit} className="mx-auto w-[40%]">
        <div>
          <label className="block text-sm font-bold mb-2">Description:</label>
          <input
            type="text"
            value={formData.description}
            required
            name="description"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Amount:</label>
          <input
            type="number"
            value={formData.amount}
            required
            name="amount"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
        <label className="block text-sm font-bold mb-2">Category:</label>
          <input
            type="text"
            value={formData.category}
            required
            name="category"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Entry Type:</label>
          <select
            name="entryType"
            value={formData.entryType}
            required
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="savings">Savings</option>
          </select>
        </div>
        <div className="flex justify-center mt-3">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Entry
        </button>
        </div>
        
      </form>
    </>
  );
};
