import React from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import CourseIcon from "./NavIcon";

const navLinks = [
	{ linkName: "Home" },
	{ linkName: "Modules" },
	{ linkName: "Piazza" },
	{ linkName: "Zoom Meetings" },
	{ linkName: "Assignments" },
	{ linkName: "Quizzes" },
	{ linkName: "Grades" },
	{ linkName: "People" },
	{ linkName: "Panopto Video" },
	{ linkName: "Discussions", icon: true },
	{ linkName: "Announcements", icon: true },
	{ linkName: "Pages", icon: true },
	{ linkName: "Files", icon: true },
	{ linkName: "Rubrics", icon: true },
	{ linkName: "Outcomes", icon: true },
	{ linkName: "Collaborations", icon: true },
	{ linkName: "Syllabus", icon: true },
	{ linkName: "Settings" }
];

const Courses = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Navigate to="Home" />} />
			</Routes>
			<ul className="sidebar d-flex flex-column gap-3 p-3 me-4 ps-4 list-unstyled text-danger w-25">
				{navLinks.map(({ linkName, icon }) => (
					<CourseIcon linkName={linkName} icon={icon} />
				))}
			</ul>
		</div>
	);
};

export default Courses;
