import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperators";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
function JavaScript() {
	console.log("Hello World!");

	return (
		<div>
			<h1>JavaScript</h1>

			<TernaryOperator />
			<IfElse />
			<BooleanVariables />
			<VariableTypes />
			<VariablesAndConstants />
			<WorkingWithFunctions />
			<WorkingWithArrays />
			<TemplateLiterals />
			<House />
			<Spread />
			<Destructing />
			<FunctionDestructing />
		</div>
	);
}
export default JavaScript;
