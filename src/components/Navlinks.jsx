import React, {useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { get } from "../api";
import {authContext} from "../context/Auth";

export default function NavLinks() {

	const { user, logged, setUser } = useContext(authContext);
    const navigate = useNavigate();

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
		<nav>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                {!logged ? 
                <>                
                    
                    <li><NavLink to={"/login"}>Login</NavLink></li>
                    <li><NavLink to={"/signup"}>Sign Up</NavLink></li>
                    <li><NavLink to={"/cart"}>Cart</NavLink></li>
                </>:
                <>
                    <li className="text-white">{user.name}</li>
                    <li><button onClick={logout}>Log Out</button></li>
                </>}
                
            </ul>			
		</nav>
	)
}
