import { Routes, Route, Navigate } from "react-router";
import { useState, useEffect } from "react";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import CourseData from "./Database/courses.json";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "../project/users/signin";
import Account from "../project/users/account";

function Kanbas() {
	const defaultCourse = CourseData[0]._id;
	const [courses, setCourses] = useState([]);
	const BASE =
		process.env.REACT_APP_API_BASE || "https://kanbas-server-ko6e.onrender.com";
	const URL = `${BASE}/api/courses`;
	const findAllCourses = async () => {
		const response = await axios.get(URL);
		setCourses(response.data);
	};
	useEffect(() => {
		findAllCourses();
	}, []);

	return (
		<Provider store={store}>
			<div className="d-flex ">
				<KanbasNavigation />
				<Routes>
					<Route path="/" element={<Navigate to="Dashboard" />} />
					<Route path="Account" element={<h1>Account</h1>} />
					<Route
						path="Dashboard"
						element={<Dashboard courses={courses} setCourses={setCourses} />}
					/>

					{/* Courses Page */}
					<Route path="Courses/" element={<Navigate to={defaultCourse} />} />
					<Route
						path="Courses/:courseId/*"
						element={<Courses courseData={courses} />}
					/>
					<Route path="signin" element={<Signin />} />
					<Route path="account/" element={<Account />} />
				</Routes>
			</div>
		</Provider>
	);
}
export default Kanbas;
