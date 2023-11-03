import { Route, Routes, Navigate } from "react-router";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import { Provider } from "react-redux";
import store from "./store";

function Labs() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<Navigate to="a3" />} />
				<Route path="a3" element={<Assignment3 />} />
				<Route path="a4" element={<Assignment4 />} />
			</Routes>
		</Provider>
	);
}
export default Labs;
