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
{
	/* <ul
				class="bg-black d-flex flex-column gap-3 list-unstyled text-decoration-none"
			>
				<li class="bg-white p-2 d-flex flex-column align-items-center">
					<i class="fa fa-user-circle text-black-50"></i>
					<a class="text-danger" href="account.html">Account</a>
				</li>
				<li class="p-2 d-flex flex-column align-items-center">
					<i class="fa fa-tachometer-alt text-danger"></i>
					<a class="text-white text-decoration-none" href="dashboard.html"
						>Dashboard</a
					>
				</li>

				<li class="p-2 d-flex flex-column align-items-center">
					<i class="fa fa-book text-danger"></i>
					<a class="text-white" href="courses.html">Courses</a>
				</li>

				<li class="p-2 d-flex flex-column align-items-center">
					<i class="fa fa-calendar-alt text-danger"></i>
					<a class="text-white" href="#">Calendar</a>
				</li>
				<li class="p-2 d-flex flex-column align-items-center">
					<i class="fa fa-inbox text-danger"></i>
					<a class="text-white" href="#">Inbox</a>
				</li>
				<li class="p-2 d-flex flex-column align-items-center">
					<i class="fa fa-clock text-danger"></i>
					<a class="text-white" href="#">History</a>
				</li>
				<li class="p-2 d-flex flex-column align-items-center">
					<i class="fa fa-tv text-danger"></i>
					<a class="text-white" href="#">Studio</a>
				</li>
				<li class="p-2 d-flex flex-column align-items-center">
					<i class="fa fa-power-off fa-rotate-90 text-danger"></i>
					<a class="text-white" href="#">Commons</a>
				</li>
				<li class="p-2 d-flex flex-column align-items-center">
					<i class="fa fa-question-circle text-danger"></i>
					<a class="text-white" href="#">Help</a>
				</li>
			</ul> */
}
