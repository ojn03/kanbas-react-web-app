import React from "react";
import { FaBell, FaChartBar, FaFileDownload, FaBullhorn } from "react-icons/fa";

const status = () => {
	return (
		<div
			className="d-flex flex-column gap-1 ms-auto"
			style={{ width: "fit-content", fontSize: "15px" }}
		>
			<button className="rounded-1 py-1 px-2">
				<FaFileDownload className="float-start mt-1" />
				Import Existing Content
			</button>
			<button className="rounded-1 py-1 px-2">Import from Commons</button>
			<button className="rounded-1 py-1 px-2"> Choose Home Page</button>
			<button className="rounded-1 py-1 px-2">
				<FaChartBar className="float-start mt-1" /> View Course Stream
			</button>
			<button className="rounded-1 py-1 px-2">
				<FaBullhorn className="float-start mt-1" />
				New Announcements
			</button>
			<button className="rounded-1 py-1 px-2">
				<FaChartBar className="float-start mt-1" />
				New Analytics
			</button>
			<button className="rounded-1 py-1 px-2">
				<FaBell className="float-start mt-1" />
				View Course Notifications
			</button>
		</div>
	);
};

export default status;
