import { Routes, Route, Navigate, useParams } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import CourseData from "./Database/courses.json";

function Kanbas() {
	const defaultCourse = CourseData[0]._id;
	return (
		<div className="d-flex ">
			<KanbasNavigation />
			<Routes>
				<Route path="/" element={<Navigate to="Dashboard" />} />
				<Route path="Account" element={<h1>Account</h1>} />
				<Route path="Dashboard" element={<Dashboard />} />

				{/* Courses Page */}
				<Route path="Courses/" element={<Navigate to={defaultCourse} />} />
				<Route path="Courses/:courseId/*" element={<Courses />} />
			</Routes>
		</div>
	);
}
export default Kanbas;
