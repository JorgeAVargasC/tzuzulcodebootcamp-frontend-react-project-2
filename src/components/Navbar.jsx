import React from "react";
import Navlinks from "./Navlinks";
import Logo from "../assets/svg/Logo.svg";

export default function Navbar() {
	return (
		<div className="flex flex-row bg-black">
			<div className="bg-red-700">
				<img className="" src={Logo} alt="Guitar Store logo" />
			</div>
			<div className="flex justify-end bg-yellow-300 mx-auto text-white">
				<Navlinks />
			</div>
		</div>
	);
}
