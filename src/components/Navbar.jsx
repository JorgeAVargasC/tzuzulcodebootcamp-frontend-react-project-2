import React, { useState } from "react";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { Spin as Hamburger } from "hamburger-react";
import Logo from "../assets/svg/Logo.svg";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import Navlinks from "./NavLinks";

export default function Navbar() {

	const [isOpen, setOpen] = useState(false);

	return (
		<div className="content-center">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7 my-5">
						<div>
							<NavLink to="/home">
								<img classNameName="" src={Logo} alt="Guitar Store logo" />
							</NavLink>

						</div>

						<div className="hidden md:flex items-center space-x-1">
							<a className="py-4 px-2 text-orange-500 border-b-4 border-orange-500 font-semibold ">Home</a>
							<a className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300">About</a>
							<a className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300">Shop</a>
							<a className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300">Contact Us</a>
						</div>
					</div>

					<div className="hidden md:flex items-center space-x-3 ">
						<NavLink to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-orange-500 hover:text-white transition duration-300">Log In</NavLink>
						<NavLink to="/signup" className="py-2 px-2 font-medium text-white bg-orange-500 rounded hover:bg-orange-400 transition duration-300">Sign Up</NavLink>
					</div>

					<div class="md:hidden flex items-center">
						<nav
							className={isOpen ? "navlinks-mobile open" : "navlinks-mobile close"}
							onClick={() => setOpen(false)}
						>
						</nav>

						<Hamburger
							rounded
							toggled={isOpen}
							toggle={setOpen}
							direction="left"
							duration={0.4}
						/>
					</div>
				</div>
			</div>


		</div>

		// <div classNameName="flex flex-row bg-black">
		// 	<div classNameName="bg-red-700">
		// 		<img classNameName="" src={Logo} alt="Guitar Store logo" />
		// 	</div>
		// 	<div classNameName="flex justify-end bg-yellow-300 mx-auto text-white">
		// 		<Navlinks />
		// 	</div>
		// </div>
	);
}
