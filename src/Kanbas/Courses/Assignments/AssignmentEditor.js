import React from "react";
import { useParams } from "react-router";
import assignments from "../../Database/assignments.json";
import { useNavigate } from "react-router";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";

const AssignmentEditor = () => {
	const { courseId, assignmentId } = useParams();
	const navigate = useNavigate();
	const assignment = assignments.find(
		(assignment) => assignment._id === assignmentId
	);

	const Save = () => {
		console.log("Actually saving assignment TBD in later assignments");
		navigate(`/Kanbas/Courses/${courseId}/Assignments`);
	};

	return (
		<div className="w-100">
			<div className="pb-3 my-4">
				<div className="float-end">
					<span className="text-success border-secondary p-1 rounded-1">
						<FaCheckCircle />
						Published
					</span>

					<span className="dropdown">
						<button
							type="button"
							className="btn btn-light"
							data-bs-toggle="dropdown"
						>
							<i className="fa fa-ellipsis-v text-secondary"></i>
							<FaEllipsisV className="text-secondary" />
						</button>
						<ul className="dropdown-menu">
							<li>
								<Link className="dropdown-item" to="#">
									Edit Assignments date
								</Link>
							</li>
						</ul>
					</span>
				</div>
			</div>
			<p>{assignment.title}</p>
			<input className="w-100" type="text" defaultValue={assignment.title} />
			<textarea
				className="w-100 my-3"
				defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Faciliscupiditate amet quaerat et rem nostrum nesciunt modi at inventorerepellat! Ex ipsa mollitia dicta, in quam beatae quibusdam architectodolor!"
				rows="4"
			></textarea>

			<div className="d-flex flex-row p-3">
				<label className="text-end px-2 w-25">Points</label>

				<div className="w-75">
					<input type="text" defaultValue="100" />
				</div>
			</div>

			<div className="d-flex flex-row p-3">
				<label className="text-end px-2 w-25">Assignment Group</label>

				<div className="w-75">
					<select className="w-100" type="text">
						<option>Assignments</option>
					</select>
				</div>
			</div>
			<div className="d-flex flex-row p-3">
				<label className="text-end px-2 w-25">Display grade as</label>

				<div className="w-75">
					<select className="w-100" type="text">
						<option>Percentage</option>
					</select>
				</div>
			</div>

			<div className="d-flex flex-row p-2">
				<label className="text-end px-2 w-25">Submission Type</label>

				<div className="w-75 border p-2">
					<div>
						<select>
							<option>Online</option>
						</select>
					</div>
					<h5>Online Entry Options</h5>
					<div>
						<input defaultChecked type="checkbox" />
						<label>Text Entry</label> <br />
						<input defaultChecked type="checkbox" />
						<label>Website URL</label> <br />
						<input defaultChecked type="checkbox" />
						<label>Media Recordings</label>
						<br />
						<input type="checkbox" /> <label>File Uploads</label> <br />
						<input type="checkbox" /> <label>Student Annotations</label>
						<br />
					</div>
				</div>
			</div>
			<div className="d-flex flex-row p-3">
				<label className="text-end px-2 w-25">Assign</label>

				<div className="w-75 border  pb-0">
					<label className="fw-bold">Assign to</label>
					<input className="d-block" type="text" defaultValue="Everyone" />
					<label className="fw-bold">Due</label>
					<input className="d-block" type="date" defaultValue="2001-11-09" />
					<div className="d-flex gap-3">
						<div className="">
							<label className="fw-bold">Available from</label>
							<input
								className="d-block"
								type="date"
								defaultValue="2001-11-09"
							/>
						</div>
						<div className="">
							<label className="fw-bold">Until</label>
							<input
								className="d-block"
								type="date"
								defaultValue="2001-11-09"
							/>
						</div>
					</div>
					<button className="mt-2 w-100 text-center">+ Add</button>
				</div>
			</div>
			<label>
				<input type="checkbox" /> Notify users that this content has changed
			</label>

			<span className="ms-auto" style={{width:"fit-content"}}>
				<button onClick={() => Save()}>Save</button>
				<button onClick={() => Save()}>Cancel</button>
			</span>
		</div>
	);
};

export default AssignmentEditor;
