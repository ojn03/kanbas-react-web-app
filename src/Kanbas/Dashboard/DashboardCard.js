import { FaEllipsisV } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import EditCourseModal from "./EditCourseModal";
import axios from "axios";

const DashboardCard = ({
	_id,
	color,
	name,
	number,
	term,
	courses,
	setCourses
}) => {
	const BASE = process.env.REACT_APP_API_BASE || "https://kanbas-server-ko6e.onrender.com";
	async function deleteCourse() {
		const newCourses = courses.filter((course) => course._id !== _id);

		const response = await axios.delete(`${BASE}/api/courses/${_id}`);

		setCourses(newCourses);
	}
	return (
		<div
			className="d-flex flex-column col-4 border border-4 border-black-50 rounded-3 p-0 card"
			style={{ width: "260px", height: "270px" }}
		>
			<div className="h-50" style={{ backgroundColor: color }}>
				<FaEllipsisV className="float-end  text-white m-3" />
			</div>
			<div className="h-50 w-100 p-2">
				<Link
					to={`/Kanbas/Courses/${_id}`}
					className="text-decoration-none"
					style={{ color }}
				>
					{name}
				</Link>
				<br />
				<span>{number}</span>
				<br />
				<small>{term}</small>
				<br />
				<FaPenSquare className="mt-2" size={24} />
				<EditCourseModal id={_id} courses={courses} setCourses={setCourses} />
				<button
					onClick={() => deleteCourse()}
					className="bg-danger rounded-2 ms-1"
				>
					Delete
				</button>
			</div>
		</div>
	);
};
export default DashboardCard;
