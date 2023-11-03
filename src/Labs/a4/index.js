import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
	function sayHello() {
		alert("Hello");
	}
	return (
		<div>
			<h1>Assignment 4</h1>
			<PassingFunctions theFunction={sayHello} />
			<Add a={1} b={2} />
			<ClickEvent />
			<PassingDataOnEvent />
			<EventObject />
			<Counter />
			<BooleanStateVariables />
			<StringStateVariables />
			<DateStateVariable />
			<ObjectStateVariable />
			<ArrayStateVariable />
			<ParentStateComponent />
			<ReduxExamples />
		</div>
	);
};
export default Assignment4;
