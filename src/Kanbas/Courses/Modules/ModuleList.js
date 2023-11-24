import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ModuleItem from "./ModuleItem";
import { FaCheckCircle } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import AddModuleModal from "./AddModuleModal";
import { setModules } from "./modulesReducer";
import { findModulesForCourse } from "./client";
import { useSelector, useDispatch } from "react-redux";


const ModuleList = () => {
	const dispatch = useDispatch();
	const { courseId } = useParams();
	useEffect(() => {
		findModulesForCourse(courseId).then((modules) =>
			dispatch(setModules(modules))
		);
	}, [courseId]);

	const modulesState = useSelector((state) => state.modulesReducer.modules);
	const courseModules = modulesState.filter(
		(module) => module.course === courseId
	);
	return (
		<div>
			<Header modules={modulesState} />
			<ul className="d-flex flex-column gap-2 ">
				{courseModules.map((m, idx) => (
					<ModuleItem modules={modulesState} key={idx} {...m} />
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

				<AddModuleModal />

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
