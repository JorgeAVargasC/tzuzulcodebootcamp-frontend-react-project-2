import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import { useContext, useEffect } from "react";
import { get } from "./api/index";
import { authContext } from "./context/Auth";

export default function App() {

	const {setUser} = useContext(authContext)

	// User Session Validate 
	useEffect(() => {
		get("/api/auth/validate")
			.then(({user}) => {
				setUser({
					logged:true,
					user:user
				})
			})
			.catch((err) => {
				console.log(err);
			});
	}, [setUser]);

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	);
}
