import SideBarIcon from "./SideBarIcon";
import {
	FaBook,
	FaTachometerAlt,
	FaCalendarAlt,
	FaInbox,
	FaClock,
	FaTv,
	FaUserCircle,
	FaPowerOff,
	FaQuestionCircle
} from "react-icons/fa";

function KanbasNavigation() {
	const icons = [
		{
			linkName: "Account",
			icon: <FaUserCircle color="gray" />,
			textColor: "danger",
			bgColor: "white"
		},
		{
			linkName: "Dashboard",
			icon: <FaTachometerAlt color="red" />,
			textColor: "white",
			bgColor: "black"
		},
		{
			linkName: "Courses",
			icon: <FaBook color="red" />,
			textColor: "white",
			bgColor: "black"
		},
		{
			linkName: "Calendar",
			icon: <FaCalendarAlt color="red" />,
			textColor: "white",
			bgColor: "black"
		},
		{
			linkName: "Inbox",
			icon: <FaInbox color="red" />,
			textColor: "white",
			bgColor: "black"
		},
		{
			linkName: "History",
			icon: <FaClock color="red" />,
			textColor: "white",
			bgColor: "black"
		},
		{
			linkName: "Studio",
			icon: <FaTv color="red" />,
			textColor: "white",
			bgColor: "black"
		},
		{
			linkName: "Commons",
			icon: <FaPowerOff color="red" rotate="90deg" />,
			textColor: "white",
			bgColor: "black"
		},
		{
			linkName: "Help",
			icon: <FaQuestionCircle color="red" />,
			textColor: "white",
			bgColor: "black"
		}
	];

	return (
		<ul className=" d-flex flex-column list-unstyled text-decoration-none">
			{icons.map((props, index) => (
				<SideBarIcon {...props} key={index} />
			))}
		</ul>
	);
}
export default KanbasNavigation;