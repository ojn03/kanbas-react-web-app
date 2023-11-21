import { React } from "react";
import DashboardCard from "./DashboardCard";
import AddCourseModal from "./AddCourseModal";

const Dashboard = ({courses, setCourses}) => {
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
			<div className="w-100 ">
				<span className="">Published Courses ({courses.length})</span>
				<AddCourseModal
					className="float-end"
					courses={courses}
					setCourses={setCourses}
				/>

				<hr />
			</div>
			<div className="container mx-0">
				<div className="ms-3 row-cols-4 row gap-3">
					{courses.map((course, key) => (
						<DashboardCard
							key={key}
							{...course}
							courses={courses}
							setCourses={setCourses}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
