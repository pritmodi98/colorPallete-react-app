import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import withStyles from "@material-ui/styles/withStyles";
import styles from './styles/PaletteStyles'


class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: "hex" };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}
	changeLevel(level) {
		// console.log(level);
		this.setState({ level });
	}

	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { colors, paletteName, emoji, id } = this.props.palette; //id:mu-efenkf
		const { classes } = this.props;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox
				background={color[format]}
				name={color.name}
				key={color.id}
				id={color.id} //id:pink
				paletteId={id}
				moreUrl={`/palette/${id}/${color.id}`}
				showingFullPalette
			/>
		));
		return (
			<div className={classes.palette}>
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					showingAllColors
				/>
				<div className={classes.colors}>{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
