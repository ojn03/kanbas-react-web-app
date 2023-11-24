import React from "react";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule } from "./modulesReducer";
import { createModule } from "./client";

const AddModuleModal = () => {
	const { courseId } = useParams();

	const modules = useSelector((state) => state.modulesReducer.modules);
	const courseModules = modules.filter((module) => module.course === courseId);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, desc } = e.target;
		const newModule = {
			_id: `M${courseId}${courseModules.length + 1}`,
			name: name.value,
			description: desc.value,
			course: courseId
		};

		// dispatch(addModule(newModule));
		createModule(courseId, newModule).then((module) => {
			dispatch(addModule(module));
		});
	};

	return (
		<>
			<button
				type="button"
				className="bg-danger text-white rounded-1"
				data-bs-toggle="modal"
				data-bs-target="#addModuleModal"
			>
				<FaPlus />
				Module
			</button>

			<div
				className="modal fade"
				id="addModuleModal"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="addModuleLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="addModuleLabel">
								Add Module
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="modal-body d-flex flex-column gap-2">
								<label>
									Module Name
									<input
										required
										name="name"
										type="text"
										className="ms-2 px-2"
										placeholder="Supply Chain Pt 1"
									/>
								</label>
								<label>
									Module Description
									<input
										required
										name="desc"
										className="ms-2 px-2"
										placeholder="how to manage a chain of supplies (or sum)"
									/>
								</label>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="btn btn-primary"
									data-bs-dismiss="modal"
								>
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddModuleModal;
