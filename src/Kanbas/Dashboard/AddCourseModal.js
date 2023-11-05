import React from "react";

const AddCourseModal = ({ courses, setCourses, className }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const newId = new Date().toISOString();

		const newCourse = {
			_id: newId,
			number: e.target.CourseNumber.value,
			name: e.target.CourseName.value,
			term: e.target.Term.value,
			startDate: e.target.StartDate.value,
			endDate: e.target.EndDate.value,
			color: e.target.Color.value
		};
		setCourses([...courses, newCourse]);
	};

	return (
		<div className={className}>
			<button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#addCourseModal"
			>
				Add Course
			</button>

			<div
				className="modal fade"
				id="addCourseModal"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="addCourseModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="addCourseModalLabel">
								Add Course
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
									Course Number
									<input
										required
										name="CourseNumber"
										type="text"
										className="ms-2 px-2"
										placeholder="CS4550"
									/>
								</label>
								<label>
									CourseName
									<input
										required
										name="CourseName"
										className="ms-2 px-2"
										placeholder="Stocks for dummies 101"
									/>
								</label>
								<label>
									Term
									<input
										required
										name="Term"
										className="ms-2 px-2"
										placeholder="Spring 1999"
									/>
								</label>
								<label>
									Start Date
									<input
										required
										name="StartDate"
										type="date"
										className="ms-2 px-2"
										defaultValue="2000-01-01"
									/>
								</label>
								<label>
									End Date
									<input
										required
										name="EndDate"
										type="date"
										defaultValue="2000-12-31"
										className="ms-2 px-2"
									/>
								</label>
								<label>
									Color
									<input
										required
										name="Color"
										type="color"
										className="ms-2 px-2"
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
		</div>
	);
};

export default AddCourseModal;
