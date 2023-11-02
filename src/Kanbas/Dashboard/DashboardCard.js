import { FaEllipsisV } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardCard = ({ _id,color, name, number, term }) => {
	return (
		<div
			className="d-flex flex-column col-4 border border-4 border-black-50 rounded-3 p-0 card"
			style={{ width: "260px", height: "270px" }}
		>
			<div className="h-50" style={{ backgroundColor: color }}>
				<FaEllipsisV className="float-end  text-white m-3" />
			</div>
			<div className="h-50 w-100 p-2">
				<Link to={`/Kanbas/Courses/${_id}`} className="text-decoration-none" style={{ color }}>{name}</Link>
				<br />
				<span>{number}</span>
				<br />
				<small>{term}</small>
				<br />
				<FaPenSquare className="mt-2" size={24} />
			</div>
		</div>
	);
};
export default DashboardCard;
