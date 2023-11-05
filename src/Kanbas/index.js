import { Routes, Route, Navigate, useParams } from "react-router";
import { useState } from "react";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import CourseData from "./Database/courses.json";

function Kanbas() {
	const defaultCourse = CourseData[0]._id;
	const [courses, setCourses] = useState(CourseData);
	return (
		<div className="d-flex ">
			<KanbasNavigation />
			<Routes>
				<Route path="/" element={<Navigate to="Dashboard" />} />
				<Route path="Account" element={<h1>Account</h1>} />
				<Route path="Dashboard" element={<Dashboard courses={courses} setCourses={setCourses}/>} />

				{/* Courses Page */}
				<Route path="Courses/" element={<Navigate to={defaultCourse} />} />
				<Route path="Courses/:courseId/*" element={<Courses courseData={courses}  />} />
			</Routes>
		</div>
	);
}
export default Kanbas;
