import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50; //+ rand();
	const left = 50; //+ rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 800,
		backgroundColor: theme.palette.background.paper,
		textAlign: 'center',
		// border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		outline: 0,
	},
}));

function SimpleModal(props) {
	// const {image, title, content, abstract} = props;
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<h2 id="simple-modal-title">{props.title}</h2>
			<p id="simple-modal-description">
			<Chip label={props.category} />
				
				{props.resume}
			</p>
			<img src={props.image} height="400px"/>
			<Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
		</div>
	);

	return (
		<div>
			<Button type="button" onClick={handleOpen} variant="outlined" color="secondary"> Ver Mais</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		</div>
	);
}
export default SimpleModal;