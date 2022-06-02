import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import {authContext} from "../context/Auth";

export default function Navlinks() {

	const { user, logged } = useContext(authContext);

	return (
		<nav>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                {!logged ? 
                <>                
                    
                    <li><NavLink to={"/login"}>Login</NavLink></li>
                    <li><NavLink to={"/signup"}>Sign Up</NavLink></li>
                </>:
                <>
                    <li className="text-white">{user.name}</li>
                </>}
                
            </ul>			
		</nav>
	)
}
