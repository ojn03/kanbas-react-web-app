import * as client from "./client";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
function Account() {
	const { id } = useParams();

	const [account, setAccount] = useState(null);
	const navigate = useNavigate();
	const fetchAccount = async () => {
		const fetchedaccount = await client.account();
		setAccount(fetchedaccount);
	};
	const findUserById = async (id) => {
		const user = await client.findUserById(id);
		setAccount(user);
	};

	useEffect(() => {
		if (id) {
			findUserById(id);
		} else {
			fetchAccount();
		}
	}, []);
	const save = async () => {
		await client.updateUser(account);
	};
	return (
		<div className="w-50">
			<h1>Account</h1>
			{account && (
				<div>
					password
					<input
						className="d-block"
						value={account.password}
						onChange={(e) =>
							setAccount({ ...account, password: e.target.value })
						}
					/>
					firstName
					<input
						className="d-block"
						value={account.firstName}
						onChange={(e) =>
							setAccount({ ...account, firstName: e.target.value })
						}
					/>
					lastName
					<input
						className="d-block"
						value={account.lastName}
						onChange={(e) =>
							setAccount({ ...account, lastName: e.target.value })
						}
					/>
					dob
					<input
						className="d-block"
						value={account.dob}
						onChange={(e) => setAccount({ ...account, dob: e.target.value })}
					/>
					email
					<input
						className="d-block"
						value={account.email}
						onChange={(e) => setAccount({ ...account, email: e.target.value })}
					/>
					role
					<select
						onChange={(e) => setAccount({ ...account, role: e.target.value })}
					>
						<option value="USER">User</option>
						<option value="ADMIN">Admin</option>
						<option value="FACULTY">Faculty</option>
						<option value="STUDENT">Student</option>
					</select>
					<button className="btn btn-info" onClick={save}>
						Save
					</button>
					<Link to="/project/admin/users" className="btn btn-warning w-100">
						Users
					</Link>
				</div>
			)}
		</div>
	);
}
export default Account;
