import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/styles/withStyles";
import styles from "./styles/ColorBox.Styles";

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			copied: false,
		};
	}
	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => {
				this.setState({ copied: false });
			}, 1500);
		});
	}
	render() {
		const { name, background, moreUrl, showingFullPalette, classes } =
			this.props; //id:red ,paletteId:mu-denfeb
		const { copied } = this.state;
		// const isDarkColor = chroma(background).luminance() <= 0.08;
		// const isLightColor = chroma(background).luminance() >= 0.7;

		return (
			<CopyToClipboard text={background} onCopy={() => this.changeCopyState()}>
				<div style={{ background }} className={classes.colorBox}>
					<div
						style={{ background }}
						className={`${classes.copyOverlay} ${
							copied && classes.showOverlay
						}`}
					/>
					<div
						className={`${classes.copyMessage} ${
							copied && classes.showMessage
						}`}
					>
						<h1>copied!</h1>
						<p className={classes.copyText}>{background}</p>
					</div>
					<div className="copy-container">
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
						</div>
						<button className={classes.copyButton}>Copy</button>
					</div>
					{showingFullPalette && (
						<Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
							<span className={classes.seeMore}>MORE</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox);
