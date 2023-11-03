import React from "react";
import HelloReducer from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
	return (
		<div>
			<div>ReduxExamples</div>
			<HelloRedux />
			<CounterRedux />
			<AddRedux />
            <TodoList />
		</div>
	);
};

export default ReduxExamples;
