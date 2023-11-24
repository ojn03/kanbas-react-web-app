import React, { useState, useEffect } from "react";
import axios from "axios";

const EditCourseModal = ({ id, courses, setCourses }) => {
	const index = courses.findIndex((course) => course._id === id);
	const course = courses[index];
	const handleSubmit = async (e) => {
		e.preventDefault();
		const index = courses.findIndex((course) => course._id === id);
		courses[index] = {
			number: e.target.CourseNumber.value,
			name: e.target.CourseName.value,
			term: e.target.Term.value,
			startDate: e.target.StartDate.value,
			endDate: e.target.EndDate.value,
			color: e.target.Color.value
		};
		const response = await axios.put(
			`http://localhost:4000/api/courses/${id}`,
			courses[index]
		);

		setCourses([...courses]);
	};

	return (
		<>
			<button
				type="button"
				className="bg-warning rounded-2 ms-1"
				data-bs-toggle="modal"
				data-bs-target={`#editCourseModal${index}`}
			>
				Edit
			</button>

			<div
				className="modal fade"
				id={`editCourseModal${index}`}
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				// aria-labelledby="editCourseModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								// id="editCourseModalLabel"
							>
								Edit Course
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
										defaultValue={course.number}
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
										type="text"
										defaultValue={course.name}
										name="CourseName"
										className="ms-2 px-2"
										placeholder="Stocks for dummies 101"
									/>
								</label>
								<label>
									Term
									<input
										required
										type="text"
										defaultValue={course["term"]}
										name="Term"
										className="ms-2 px-2"
										placeholder="Spring 1999"
									/>
								</label>
								<label>
									Start Date
									<input
										required
										defaultValue={course.startDate}
										name="StartDate"
										type="date"
										className="ms-2 px-2"
									/>
								</label>
								<label>
									End Date
									<input
										required
										defaultValue={course.endDate}
										name="EndDate"
										type="date"
										className="ms-2 px-2"
									/>
								</label>
								<label>
									Color
									<input
										required
										defaultValue={course.color}
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
		</>
	);
};

export default EditCourseModal;
