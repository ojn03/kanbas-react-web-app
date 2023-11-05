import React from "react";
import ModuleList from "../Modules/ModuleList.js";
import Status from "./status.js";
const Home = () => {
	return (
		<div className="d-flex flex-row w-100">
			<div className="w-75 me-3">
				<ModuleList />
			</div>
			<div className="w-25">
				<Status />
			</div>
		</div>
	);
};

export default Home;
