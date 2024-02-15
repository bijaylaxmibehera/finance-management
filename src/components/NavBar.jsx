import { NavLink } from "react-router-dom";

export const NavBar=()=>{
    return (
        <nav>
            <NavLink to="/">New Entries</NavLink>
            <NavLink to="/income">Income</NavLink>
            <NavLink to="/expenses">Expenses</NavLink>
            <NavLink to="/savings">Savings</NavLink>
        </nav>
    )
}