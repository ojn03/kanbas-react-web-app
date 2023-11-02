import React from "react";
import { useParams } from "react-router";
import modules from "../../Database/modules.json";
import ModuleItem from "./ModuleItem";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";

const ModuleList = () => {
	const { courseId } = useParams();
	const courseModules = modules.filter((module) => module.course === courseId);
	return (
		<div className="">
			<Header />
			<ul className="d-flex flex-column gap-2 ">
				{courseModules.map((m,idx) => (
					<ModuleItem key={idx} {...m} />
				))}
			</ul>
		</div>
	);
};

const Header = () => {
	return (
		<div className="border-bottom pb-3 my-4 ">
			<div className="ms-auto" style={{ width: "fit-content" }}>
				<button className="border-secondary rounded-1">Collapse All</button>

				<button className="border-secondary rounded-1">View Progress</button>
				<button className="border-secondary rounded-1 dropdown-toggle">
					<FaCheckCircle className="text-success" />
					Publish All
				</button>
				<button className="bg-danger text-white rounded-1">
					<FaPlus />
					Module
				</button>

				<span className="dropdown">
					<button
						type="button"
						className="btn btn-light"
						data-bs-toggle="dropdown"
					>
						<FaEllipsisV className="text-secondary" />
					</button>
					<ul className="dropdown-menu">
						<li>
							<a className="dropdown-item" href="#">
								Edit Assignments date
							</a>
						</li>
					</ul>
				</span>
			</div>
		</div>
	);
};

export default ModuleList;
