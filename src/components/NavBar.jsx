import { NavLink } from "react-router-dom";

export const NavBar=()=>{
    const getStyle=({isActive})=>({
        textDecoration:isActive?"underline":"",
        fontWeight:isActive?"500":"",
        color:isActive?"#ffcce6":""
    })
    return (
        <nav className="flex flex-col  gap-4  h-[100%] mx-auto w-[40%]">
            <NavLink to="/" className="hover:font-medium" style={getStyle}>New Entries</NavLink>
            <NavLink to="/income" className="hover:font-medium" style={getStyle}>Income</NavLink>
            <NavLink to="/expenses" className="hover:font-medium" style={getStyle}>Expenses</NavLink>
            <NavLink to="/savings" className="hover:font-medium" style={getStyle}>Savings</NavLink>
            <NavLink to="/dashboard" className="hover:font-medium" style={getStyle}>Dashboard</NavLink>
        </nav>
    )
}