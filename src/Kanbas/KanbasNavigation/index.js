import { Link } from "react-router-dom";

import React from "react";

function KanbasNavigation() {
	return (
		<ul className="bg-black d-flex flex-column gap-3 list-unstyled text-decoration-none">
			<li className="bg-white p-2 d-flex flex-column align-items-center">
				<i className="fa fa-user-circle text-black-50"></i>
				<Link className="text-danger" to="account.html">
					Account
				</Link>
			</li>
			<li className="p-2 d-flex flex-column align-items-center">
				<i className="fa fa-tachometer-alt text-danger"></i>
				<Link className="text-white text-decoration-none" to="dashboard.html">
					Dashboard
				</Link>
			</li>

			<li className="p-2 d-flex flex-column align-items-center">
				<i className="fa fa-book text-danger"></i>
				<Link className="text-white" to="courses.html">
					Courses
				</Link>
			</li>

			<li className="p-2 d-flex flex-column align-items-center">
				<i className="fa fa-calendar-alt text-danger"></i>
				<Link className="text-white" to="#">
					Calendar
				</Link>
			</li>
			<li className="p-2 d-flex flex-column align-items-center">
				<i className="fa fa-inbox text-danger"></i>
				<Link className="text-white" to="#">
					Inbox
				</Link>
			</li>
			<li className="p-2 d-flex flex-column align-items-center">
				<i className="fa fa-clock text-danger"></i>
				<Link className="text-white" to="#">
					History
				</Link>
			</li>
			<li className="p-2 d-flex flex-column align-items-center">
				<i className="fa fa-tv text-danger"></i>
				<Link className="text-white" to="#">
					Studio
				</Link>


			</li>
			<li className="p-2 d-flex flex-column align-items-center">
				<i className="fa fa-power-off fa-rotate-90 text-danger"></i>
				<Link className="text-white" to="#">
					Commons
				</Link>
			</li>
			<li className="p-2 d-flex flex-column align-items-center">
				<i className="fa fa-question-circle text-danger"></i>
				<Link className="text-white" to="#">
					Help
				</Link>
			</li>
		</ul>
	);
}

export default KanbasNavigation;
