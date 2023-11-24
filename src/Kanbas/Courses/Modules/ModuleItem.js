import React from "react";
import { FaGripVertical } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import EditModuleModal from "./EditModuleModal";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";
import { deleteModule } from "./modulesReducer";
const ModuleItem = ({ _id, name, description }) => {
	const dispatch = useDispatch();
	const module = useSelector((state) =>
		state.modulesReducer.modules.find((module) => module._id === _id)
	);
	function deleteItem() {
		client.deleteModule(module._id).then((status) => {
			dispatch(deleteModule(module._id));
		});
	}
	return (
		<li className="bg-dark border bg-opacity-10  d-flex justify-content-between p-1 pb-0">
			<div>
				<FaGripVertical className="text-secondary" />
				<i className="dropdown dropdown-toggle ms-2"></i>
				<h4 className="ms-2 lh-1 d-inline-block">{name}</h4>
				<p className="lh-1">{description}</p>
			</div>
			<div>
				<button className="me-2 rounded-1 bg-danger" onClick={deleteItem}>
					delete
				</button>
				<EditModuleModal _id={_id} />
				<FaCheckCircle className="text-success me-2" />
				<FaPlus className="dropdown-toggle me-2" />
				<FaEllipsisV className="text-secondary me-1" />
			</div>
		</li>
	);
};

export default ModuleItem;
