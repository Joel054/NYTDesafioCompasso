import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import SimpleModal from "../Modal/dialog";
import "./style.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 320,
    },
    media: {
        height: 300,
    },
});

function CardNews(props){
    const classes = useStyles();
    return ( 
        <Card className = {classes.root}>
        <CardActionArea >
        <CardMedia className = {classes.media}
        image = {props.image}
        title = {props.title}
        />
        <CardContent className = "cardTitle" >
            <Typography gutterBottom component = "p" className = "title">
            { props.title } 
            </Typography> 
            </CardContent> 
            </CardActionArea>
            <CardActions >  
            <SimpleModal image = { props.imageG }
                title = { props.title }
                resume = { props.content }
                link = { props.link }
                category = "Ciência"
            >
            </SimpleModal>
        </CardActions> 
        </Card>
    );
}
export default CardNews;