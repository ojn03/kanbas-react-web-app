import React from "react";
import NavCourse from "./Navigation";
import { FaBars } from "react-icons/fa";
import { Route, Routes, Navigate, useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

const Courses = ({courseData}) => {
	const { pathname } = useLocation();
	const { courseId } = useParams();
	const course = courseData.find((course) => course._id === courseId);
	const crumbPath = pathname.split("/").splice(4);
	return (
		<div className="d-flex flex-column w-100 p-2 pe-5">
			<nav className="d-flex gap-2 border-bottom m-2">
				<FaBars size={28} className="text-danger mx-2" />
				<h4>
					<ol className="breadcrumb">
						<li className="text-danger breadcrumb-item">
							<Link className="text-danger text-decoration-none" href="#">
								{course.number}
							</Link>
						</li>
						{crumbPath.map((crumb, idx) => (
							<li key={idx} className="text-black breadcrumb-item ">
								{crumb}
							</li>
						))}
					</ol>
				</h4>
			</nav>
			<div className="d-flex flex-row">
				<NavCourse />
				<Routes>
					<Route path="/" element={<Navigate to="Home" />} />
					<Route path="Home" element={<Home/>} />
					<Route path="Modules" element={<Modules />} />
					<Route path="Assignments" element={<Assignments />} />
					<Route
						path="Assignments/:assignmentId"
						element={<AssignmentEditor/>}
					/>
					<Route path="Grades" element={<h1>Grades</h1>} />
				</Routes>
			</div>
		</div>
	);
};

export default Courses;
