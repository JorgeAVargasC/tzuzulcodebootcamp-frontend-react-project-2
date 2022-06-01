import React, { useState } from "react";
import { post } from "../api";
import Errors from "../components/Errors";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
	const [errors, setErrors] = useState({
		isErrors: true,
		errors: [],
	});

	const login = (event) => {
		event.preventDefault();
		const { email, password } = event.target;

		post("/api/auth/login", {
			email: email.value,
			password: password.value,
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				setErrors({
					isErrors: true,
					errors: error.errors,
				});
			});
	};

	return (
		<>
			
			<form
				className="bg-zinc-800 border-zinc-600 p-5 w-1/2 mx-auto flex flex-col gap-5 shadow-md border rounded"
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
