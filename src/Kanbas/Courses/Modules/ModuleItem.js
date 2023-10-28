import React from "react";
import { FaGripVertical } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";

const ModuleItem = ({ _id, name, description, course }) => {
	return (
		<li className="bg-dark border bg-opacity-10 w-100 d-flex justify-content-between p-2">
			<div>
				<FaGripVertical className="text-secondary" />
				<i className="dropdown dropdown-toggle ms-2"></i>
				<h3 className="ms-2 d-inline-block">{name}</h3>
			</div>
			<div>
				<FaCheckCircle className="text-success" />
				<FaPlus className="dropdown-toggle" />
				<FaEllipsisV class="text-secondary" />
			</div>
		</li>
	);
};

export default ModuleItem;
