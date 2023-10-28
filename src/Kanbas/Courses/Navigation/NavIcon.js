import React, { useState, useEffect } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../../../App.css";

const CourseIcon = ({ linkName, icon = false }) => {
	const { pathname } = useLocation();
	const [linkColor, setLinkColor] = useState("red");

	useEffect(() => {
		pathname.includes(linkName) ? setLinkColor("black") : setLinkColor("red");
	}, [pathname]);
	const className = pathname.includes(linkName) ? "current-tab" : "";

	return (
		<li className={className}>
			<Link
				onMouseEnter={() => setLinkColor("black")}
				onMouseLeave={
					pathname.includes(linkName)
						? () => setLinkColor("black")
						: () => setLinkColor("red")
				}
				style={{ color: linkColor }}
				className="text-decoration-none"
				to={linkName}
			>
				{linkName}
			</Link>
			{icon && <FaEyeSlash className="text-black-50 float-end center mt-1" />}
		</li>
	);
};

export default CourseIcon;
