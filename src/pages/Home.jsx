import React, { useReducer } from "react";
import counterReducer, { initialState } from "../reducers/counterReducer";

export default function Home() {
	const [state, dispatch] = useReducer(counterReducer, initialState);
	return (
		<>
			<p>{state.counter}</p>

			<button
				className="bg-green-300"
				onClick={() => {
					dispatch({ type: "ADD" });
				}}
			>
				Add
			</button>
			<button
				className="bg-red-300"
				onClick={() => {
					dispatch({ type: "SUB" });
				}}
			>
				Sub
			</button>
		</>
	);
}
