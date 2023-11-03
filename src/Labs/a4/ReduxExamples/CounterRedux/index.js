import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
const CountRedux = () => {
	const { count  } = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
	return (
		<div>
			<h3>Counter Redux</h3>
            <h2>{count}</h2>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
};

export default CountRedux;
