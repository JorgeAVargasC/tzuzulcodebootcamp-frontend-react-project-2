import React from "react";
import Logo from "../assets/svg/Logo.svg";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function Navbar() {

	return (
		<div className="h-20 flex justify-center">
			<div className="w-11/12 flex justify-between items-center">
				<NavLink to="/home">
					<img className="w-12" src={Logo} alt="Guitar Store logo" />
				</NavLink>
				<NavLinks />
			</div>
		</div>
	);
}
