import React from "react";
import courses from "../Database/courses.json";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
	return (
		<div className="d-flex flex-column w-100 p-2">
			<div className="gap-2 border-bottom">
				<h4>
					<ol className="breadcrumb">
						<li
							className="text-black breadcrumb-item active ms-3 p-0"
							aria-current="page"
						>
							Dashboard
						</li>
					</ol>
				</h4>
			</div>
			<div>
				Published Courses (2)
				<hr />
			</div>
			<div className="container mx-0">
			
				<div className="ms-3 row-cols-4 row gap-3">
					{courses.map((course,key) => (
						<DashboardCard key={key} {...course} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
