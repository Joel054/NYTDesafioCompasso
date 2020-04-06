import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleModal from '../Modal/dialog'
// import { positions } from '@material-ui/system';

const useStyles = makeStyles({
	root: {
		maxWidth: 320,
	},
	media: {
		height: 300,
	},
});

function CardNews(props) {
	const classes = useStyles();
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
				 <SimpleModal
					image={props.imageG} 
					title={props.title} 
					resume={props.content} 
					link={props.url}
					category ='Ciência' 
				></SimpleModal>
			</CardActions>
		</Card>
	);
}
export default CardNews;
