import React, { useState, useContext } from "react";
import { post } from "../api";
import Errors from "../components/Errors";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { authContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
	
	const {setUser} = useContext(authContext)
    const navigate = useNavigate()

    const [errors,setErrors] = useState({
        isErrors:false,
        errors:[]
    })

    const signup = (event)=>{
        event.preventDefault()
        const {email,password,name} = event.target

        post("/api/auth/signup",{
            email:email.value,
            password:password.value,
            name:name.value
        }).then(({user})=>{
            setUser({type:'SIGNUP',payload:user})
            navigate("/")
        })
        .catch(error=>{
            console.log(error)
            setErrors({
                isErrors:true,
                errors:error.errors.map(e=>e.message)
            })
        })

    }

	return (
		<>
			<form
				className="my-10 bg-zinc-800 border-zinc-600 p-5 w-1/2 mx-auto flex flex-col gap-5 shadow-md border rounded text-black"
				onSubmit={signup}
			>
				<input className="p-2 shadow-md" type="text" name="name" placeholder="Jhon Doe"/>
				<input className="p-2 shadow-md" type="email" name="email" placeholder="jhon-doe@gs.com"/>
				<input className="p-2 shadow-md" type="password" name="password" placeholder="Password"/>
				<button className="bg-orange-600 text-white p-2">Sign Up</button>
			</form>

			<a
				className="flex items-center gap-3 bg-zinc-800 rounded text-white w-max mx-auto p-3 my-10 shadow-md"
				href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google"
			>
				<FcGoogle /> Google Sign Up
			</a>
			<a
				className="flex items-center gap-3 bg-zinc-800 w-max mx-auto p-3 my-10 shadow-md"
				href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/facebook"
			>
				<FaFacebookSquare /> Facebook Sign Up
			</a>

			<Errors errors={errors} />
		</>
	);
}
