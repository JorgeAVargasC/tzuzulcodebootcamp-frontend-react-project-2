import React, { useState, useContext } from "react";
import { post } from "../api";
import Errors from "../components/Errors";
import { FcGoogle } from "react-icons/fc";
import { authContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {

	const {setUser} = useContext(authContext);

	const navigate = useNavigate()
	
	const [errors, setErrors] = useState({
		isErrors: false,
		errors: [],
	});

	const login = (event) => {
		event.preventDefault();
		const { email, password } = event.target;

		post("/api/auth/login", {
			email: email.value,
			password: password.value,
		})
			.then(({user}) => {
				
				setUser({
					logged: true,
					user
				});
				navigate("/")
			})
			.catch((error) => {
				setErrors({
					isErrors: true,
					errors: error.errors.map(e=>e.message),
				});
			});
	};

	return (
		<>
			
			<form
				className="p-5 w-1/2 mx-auto my-10 flex flex-col gap-5 shadow-md border rounded text-black"
				onSubmit={login}
			>
				<input className="p-2 shadow-md" type="email" name="email" />
				<input className="p-2 shadow-md" type="password" name="password" />
				<button className="bg-orange-600 text-white p-2">Iniciar sesión</button>
			</form>

			<a
				className="flex items-center gap-3 bg-zinc-800 rounded text-white w-max mx-auto p-3 my-10 shadow-md"
				href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google"
			>
				<FcGoogle /> Iniciar sesión con Google
			</a>
			
			<Errors errors={errors} />
		</>
	);
}
