import React from "react";
import { Link, useParams } from "react-router-dom";
import assignments from "../Database/assignments.json";
import modules from "../Database/modules.json";
import courses from "../Database/courses.json";
import {
	FaCheckCircle,
	FaEdit,
	FaEllipsisV,
	FaGripVertical
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Assignments = () => {
	const { courseId } = useParams();
	const course = courses.find((course) => course._id === courseId);
	const courseAssignments = assignments.filter(
		(assignment) => assignment.course === courseId
	);

	return (
		<div className="w-100">
			<div className="bg-dark border bg-opacity-10 w-100 d-flex justify-content-between p-2">
				<div>
					<FaGripVertical />
					<i className="dropdown dropdown-toggle ms-2"></i>
					<h3 className="ms-2 d-inline-block">Assignments</h3>
				</div>
				<div>
					<FaPlus className="text-secondary" />
					<FaEllipsisV className="text-secondary" />
				</div>
			</div>
			<ul className="list-unstyled border-start border-success border-3">
				{courseAssignments.map((assignment) => (
					<AssignmentItem title={assignment.title} />
				))}
			</ul>
		</div>
	);
};

const AssignmentItem = ({ title }) => {
	return (
		<li >
			<div className="d-flex align-items-center border border-1 border-start-0 border-top-0 border-top-0">
				<div>
					<FaGripVertical className="mx-2 text-secondary" />
					<FaEdit className="text-success me-2" />
					
				</div>

				<div className="ms">
					<h4 className="mb-0">
						<Link className="text-black text-decoration-none" to="edit.html">{title}</Link>
					</h4>
					<Link className="text-danger text-decoration-none" to="#">multiple modules</Link> | Not available yet
				</div>

				<div className="ms-auto">
					
					<FaCheckCircle className="text-success" />
					<span className="dropdown">
						<button type="button" className="btn" data-bs-toggle="dropdown">
							<FaEllipsisV />
						</button>
					</span>
				</div>
			</div>
		</li>
	);
};

export default Assignments;
