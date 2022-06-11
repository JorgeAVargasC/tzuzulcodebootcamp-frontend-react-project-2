import React, { useState, useContext } from "react";
import { post } from "../api";
import Errors from "../components/Errors";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { authContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const {setUser} = useContext(authContext)

    const navigate = useNavigate()

    const [errors,setErrors] = useState({
        isErrors:false,
        errors:[]
    })

    // State form
    const [data,setData] = useState({
        email:"",
        password:""
    })

    const handleFormChange = (event)=>{
        // console.log(event.target)
        const {name,value} = event.target
        setData({
            ...data,
            [name]:value
        })
    }

    const login = (event)=>{
        event.preventDefault()
        // const {email,password} = event.target

        post("/api/auth/login",data).then(({user})=>{
            setUser({type:'LOGIN',payload:user}) //dispatch
            navigate("/")
        })
        .catch(error=>{
            setErrors({
                isErrors:true,
                errors:error.errors
            })
        })

	}

	return (
		<>
			<form onSubmit={login} className="bg-zinc-800 border-zinc-600 p-5 w-1/2 mx-auto my-10 flex flex-col gap-5 shadow-md border rounded text-black">
				<input onChange={handleFormChange} className="p-2 shadow-md" type="email" name="email" placeholder="jhon-doe@gs.com"/>
				<input onChange={handleFormChange} className="p-2 shadow-md" type="password" name="password" placeholder="password"/>
				<button className="bg-orange-600 text-white p-2">Iniciar sesión</button>
			</form>

			<a href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google" className="flex items-center gap-3 bg-zinc-800 rounded text-white w-max mx-auto p-3 my-10 shadow-md">
				<FcGoogle /> Google Login
			</a>

			<a href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/facebook" className="flex items-center gap-3 bg-zinc-800 w-max mx-auto p-3 my-10 shadow-md">
				<FaFacebookSquare /> Facebook Login
			</a>
			
			<Errors errors={errors} />
		</>
	);
}
