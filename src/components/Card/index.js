import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { positions } from '@material-ui/system';

const useStyles = makeStyles({
	root: {
		maxWidth: 800,
	},
	media: {
		height: 200,
	},
});

function CardNews(props) {
	const classes = useStyles();
	// const {image, title, content} = this.props;

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					// image="/static/images/cards/contemplative-reptile.jpg"
					image={props.image}
					title={props.title} //"Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.content}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button variant="outlined" color="secondary">
					Ver Mais
		</Button>
			</CardActions>
		</Card>
	);
}
export default CardNews;
