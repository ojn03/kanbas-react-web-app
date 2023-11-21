import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Nav from "./Nav";

function App() {
	return (
		<HashRouter>
			<div className=" p-3">
				<Nav />
				<Routes>
					<Route path="/hello" element={<HelloWorld />} />
					<Route path="/Labs/*" element={<Labs />} />
					<Route path="/Kanbas/*" element={<Kanbas />} />
				</Routes>
			</div>
		</HashRouter>
	);
}
export default App;
c