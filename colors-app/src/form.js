import React, { Component } from "react";
// import { UseToggle } from "./usetoggle";

// export function Toggler() {
// 	const [isHappy, toggleIsHappy] = UseToggle(true);
// 	const [isHeartbroken, toggleIsHeartbroken] = UseToggle(false);
// 	return (
// 		<div>
// 			<h1 onClick={toggleIsHappy}>{isHappy ? "😄" : "🙃"}</h1>
// 			<h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "❤️" : "💔"}</h1>
// 		</div>
// 	);
// }
export class Form extends Component {
	render() {
		// const obj = {
		// 	name: "username",
		// 	password: "newPassword",
		// };
		const props = {
			style: {
				color: "green",
			},
			className: "test",
		};
		const style = {
			color: "green",
		};
		return (
			<div>
				<h1 {...props}>hello</h1>
				{/* <input type="text" {...style} /> */}
			</div>
		);
	}
}
