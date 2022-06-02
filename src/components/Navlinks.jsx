import React from "react";
import { NavLink } from "react-router-dom";

export default function Navlinks() {
	return( 
    <>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
    </>
    );
}
