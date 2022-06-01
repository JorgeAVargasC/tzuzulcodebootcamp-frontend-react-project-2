import React from "react";
import Navlinks from "./Navlinks";
import Logo from "../assets/svg/Logo.svg";

export default function Navbar() {
	return (
		<div className="flex bg-neutral-800 text-white">
			<img src={Logo} alt="grocery store logo" />
			<Navlinks />
		</div>
	);
}
