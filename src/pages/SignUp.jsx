import React, { useState, useContext } from "react";
import { post } from "../api";
import Errors from "../components/Errors";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { authContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

export default function SignUp() {

	const {setUser} = useContext(authContext)
    const navigate = useNavigate()

	const {onChange,value,type} = useInput("text","")
    const email = useInput("email","")
    const password = useInput("password","")

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
            name:value
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
			<form onSubmit={signup} className="my-10 bg-zinc-800 border-zinc-600 p-5 w-1/2 mx-auto flex flex-col gap-5 shadow-md border rounded text-black">
				<input type={type} value={value} onChange={onChange} className="p-2 shadow-md" name="name" placeholder="Jhon Doe"/>
				<input className="p-2 shadow-md" {...email} name="email" placeholder="jhon-doe@gs.com"/>
				<input className="p-2 shadow-md" {...password} name="password" placeholder="Password"/>
				<button className="bg-orange-600 text-white p-2">Sign Up</button>
			</form>

			<a href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google" className="flex items-center gap-3 bg-zinc-800 rounded text-white w-max mx-auto p-3 my-10 shadow-md">
				<FcGoogle /> Google Sign Up
			</a>
			
			<a href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/facebook" className="flex items-center gap-3 bg-zinc-800 w-max mx-auto p-3 my-10 shadow-md">
				<FaFacebookSquare /> Facebook Sign Up
			</a>

			<Errors errors={errors} />
		</>
	);
}
