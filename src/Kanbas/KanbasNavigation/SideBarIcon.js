import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarIcon = ({ icon, linkName, textColor = "white" }) => {
	const { pathname } = useLocation();
	return (
		<li
			className={`${
				pathname.includes(linkName)
					? "bg-white text-danger"
					: "bg-black text-white"
			}`}
		>
			<Link
				to={`/Kanbas/${linkName} `}
				className={`list-group-item ${
					pathname.includes(linkName) && "active"
				}  p-3 d-flex flex-column align-items-center`}
			>
				{icon}
				{linkName}
			</Link>
		</li>
	);
};

export default SideBarIcon;
