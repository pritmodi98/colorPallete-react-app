import sizes from "./sizes";
export default {
	Navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: " 6vh",
	},

	logo: {
		marginRight: "15px",
		padding: "0 13px",
		fontSize: "22px",
		backgroundColor: "#eceff1",
		fontFamily: "Roboto",
		height: "100%",
		display: "flex",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
			color: "black",
		},
		[sizes.down("xs")]: {
			display: "none",
		},
	},

	slider: {
		width: "340px",
		margin: "0 10px",
		display: "inline-block",
		"& .rc-slider-track": {
			backgroundColor: "transparent !important",
		},
		"& .rc-slider-rail": {
			height: "8px !important",
		},
		"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":
			{
				backgroundColor: "green !important",
				outline: "none !important",
				border: "5px solid green !important",
				boxShadow: "none !important",
				width: "13px !important",
				height: "13px !important",
				marginLeft: "-7px !important",
				marginTop: "-3px !important",
			},
		[sizes.down("sm")]: {
			width: "150px",
		},
	},

	selectContainer: {
		marginLeft: "auto",
		marginRight: "1rem",
	},
};
