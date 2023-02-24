import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core";
import styles from "./styles/ColorPickerFormstyles";

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentColor: "teal",
			newColorName: "",
		};
	}

	// componentDidMount() {
	// console.log("hi");
	// 	ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
	// 		this.props.colors.every(
	// 			({ name }) => name.toLowerCase() !== value.toLowerCase()
	// 		);
	// 	});

	// 	ValidatorForm.addValidationRule("isColorUnique", (value) => {
	// 		this.props.colors.every(({ color }) => color !== this.state.currentColor);
	// 	});

	// }

	updateCurrentColor = ({ hex }) => {
		// console.log(newColor)
		this.setState({ currentColor: hex });
	};

	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	handleSubmit = () => {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName,
		};
		this.props.addNewColor(newColor);
		this.setState({ newColorName: "" });
	};
	render() {
		const { paletteIsFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;
		return (
			<div>
				<ChromePicker
					className={classes.picker}
					color={currentColor}
					onChangeComplete={(newColor) => this.updateCurrentColor(newColor)}
				/>
				<ValidatorForm onSubmit={this.handleSubmit} ref="form">
					<TextValidator
						className={classes.colorNameInput}
						placeholder="Color Name"
						variant="filled"
						margin="normal"
						value={newColorName}
						name="newColorName"
						onChange={this.handleChange}
						// validators={["required", "isColorNameUnique", "isColorUnique"]}
						// errorMessages={[
						// 	"enter a color name",
						// 	"Color name must be unique",
						// 	"Color already used",
						// ]}
					/>
					<Button
						className={classes.addColor}
						variant="contained"
						type="submit"
						color="primary"
						disabled={paletteIsFull}
						style={{ background: paletteIsFull ? "grey" : currentColor }}
					>
						{paletteIsFull ? "Palette Full" : "Add Color"}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
