import React, {useContext} from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { get } from "../api";
import {authContext} from "../context/Auth";

export default function NavLinks() {

	const { user, logged, setUser } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();

    const activeLink = (path) => {
        if(location.pathname === path){
            return "py-4 px-2 text-orange-500 border-b-4 border-orange-500 font-semibold"
        }else{
            return "py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300";
        }   
    }

    const logout = () => {
        get("/api/auth/logout")
        .then(result => {
            setUser({
                logged: false,
                user: {}
            })
            navigate("/");
        })
    }

	return (
		<nav className="">
            <ul className="hidden md:flex items-center space-x-4">
                <li><NavLink to={"/"} className={activeLink("/")}>Home</NavLink></li>
                <li><NavLink to={"/contact"} className={activeLink("/contact")}>Contact Us</NavLink></li>
                {!logged ? 
                <>   
                    <li><NavLink to={"/login"} className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-orange-500 hover:text-white transition duration-300" >Login</NavLink></li>
                    <li><NavLink to={"/signup"} className="py-2 px-2 font-medium text-white bg-orange-500 rounded hover:bg-orange-400 transition duration-300">Sign Up</NavLink></li>
                </>:
                <>
                    <li><NavLink to={"/shop"} className={activeLink("/shop")}>Shop</NavLink></li>
                    <li><NavLink to={"/cart"} className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300" >Cart</NavLink></li>
                    <li className="text-white">Hi, {user.name}</li>
                    <li><button onClick={logout} className="py-2 px-2 font-medium text-white bg-orange-500 rounded hover:bg-orange-400 transition duration-300" >Log Out</button></li>
                </>}
            </ul>
		</nav>
	)
}
