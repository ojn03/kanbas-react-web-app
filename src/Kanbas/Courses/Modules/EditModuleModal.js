import React from "react";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router";

const EditModuleModal = ({ _id, modules, setModules }) => {
	const { courseId } = useParams();
	const index = modules.findIndex((module) => module._id === _id);
	const module = modules[index];

	const courseModules = modules.filter((module) => module.course === courseId);
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, desc } = e.target;
		modules[index] = {
			_id: `M${courseId}${courseModules.length + 1}`,
			name: name.value,
			description: desc.value,
			course: courseId
		};

		setModules([...modules]);
	};

	return (
		<>
			<button
				type="button"
				className="me-2 rounded-1 bg-warning"
				data-bs-toggle="modal"
				data-bs-target={`#EditModuleModal${_id}`}
			>
				edit
			</button>

			<div
				className="modal fade"
				id={`EditModuleModal${_id}`}
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Edit Module</h5>
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
										defaultValue={module.name}
										placeholder="Supply Chain Pt 1"
									/>
								</label>
								<label>
									Module Description
									<input
										required
										name="desc"
										className="ms-2 px-2"
										defaultValue={module.description}
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

export default EditModuleModal;
