import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const menuOptions = [
	'GLITCH',
	'SIT',
	'SAD',
	'HAPPY',
	'DISGUST',
	'AFRAID',
	'SURPRISE',
	'ANGRY',
	'FOC+',
	'FOC-',
	'EPI-',
	'DAB',
	'COUNTING',
	'BIG',
	'LITTLE',
	'LISTENUP',
	'DETERMINED',
	'ME',
	'YOU',
	'THIS',
	'THAT',
	'WISE'
];

const ITEM_HEIGHT = 48;

class AnimationDropdownMenu extends React.Component {

	textField = null;

	state = {
		anchorEl: null,
	};

	handleClick = event => {
		this.setState({anchorEl: event.currentTarget});
	};

	handleClose = () => {
		this.setState({anchorEl: null});
	};

	handleAddText = (text) => {
		if(this.textField === null) {
			this.textField = document.getElementById('speech-textfield');
			console.log("Found textfield, registered");
		}
		console.log(text);
		this.textField.value = this.textField.value.trim() + ` {${text}} `
	};

	render() {
		const {anchorEl} = this.state;

		return (
				<div>
					<Button
							aria-owns={anchorEl ? 'simple-menu' : null}
							aria-haspopup="true"
							onClick={this.handleClick}

					>
						Animations
					</Button>
					<ClickAwayListener onClickAway={this.handleClose}>
						<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={this.handleClose}
								PaperProps={{
									style: {
										maxHeight: ITEM_HEIGHT * 8.5,
										width: 200,
									},
								}}
								style={{transform: 'translateY(60px)'}}
						>
							{menuOptions.map(option => (
									<MenuItem key={option}
											  onClick={this.handleAddText.bind(this, option)}>
										{option}
									</MenuItem>
							))}
						</Menu>
					</ClickAwayListener>
				</div>
		);
	}
}

export default AnimationDropdownMenu;