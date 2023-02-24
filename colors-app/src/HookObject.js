import React, { Fragment, useState } from "react";
function HookObject(props) {
	const [name, setName] = useState({ firstName: "", lastName: "" });
	// function handleChange() {
	// 	setName({ ...name, firstName: "Prit" });
	// }
	const { firstName, lastName } = name;
	// console.log(props);
	console.log(name);
	console.log(firstName, lastName);
	return (
		<Fragment>
			<form>
				<input
					type="text"
					value={name.firstName}
					onChange={(e) => {
						setName({ ...name, firstName: e.target.value });
					}}
				/>
				<input
					type="text"
					value={name.lastName}
					onChange={(e) => {
						setName({ ...name, lastName: e.target.value });
					}}
				/>
			</form>
		</Fragment>
	);
}

export default HookObject;
