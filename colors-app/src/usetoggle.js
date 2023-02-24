import { useState } from "react";
export function UseToggle(value = true) {
	const [name, setName] = useState(value);
	function toggler() {
		setName(!name);
	}
	return [name, toggler];
}
