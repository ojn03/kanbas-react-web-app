import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturns";

import React from "react";
import FunctionParanthesesAndParameters from "./FunctionParanthesesAndParameters";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFuction";
import FindIndex from "./FindIndex";

function WorkingWithFunctions() {
	return (
		<div>
			<ES5Functions />
			<ArrowFunctions />
			<ImpliedReturn />
			<FunctionParanthesesAndParameters />
			<ForLoops />
			<MapFunction />
			<JsonStringify />
			<FindFunction />
			<FindIndex />
		</div>
	);
}

export default WorkingWithFunctions;
