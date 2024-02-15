import { Routes,Route } from 'react-router';
import { NavBar } from './components/NavBar';
import { IncomeExpenseFrom } from './pages/IncomeExpenseForm';
import { Income } from './pages/Income';
import { Expenses } from './pages/Expenses';
import { Savings } from './pages/Savings';
import { Dashboard } from './pages/Dashboard';


function App() {
  return (
    <div className="App flex h-[100vh]">
      <div className='w-[20vw] bg-indigo-700 text-white pt-16 text-lg'>
      <NavBar/>
      </div>
      <div className='w-[80vw] bg-slate-100'>
        <Routes>
          <Route path='/' element={<IncomeExpenseFrom/>}/>
          <Route path='/income' element={<Income/>}/>
          <Route path='/expenses' element={<Expenses/>}/>
          <Route path='/savings' element={<Savings/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
