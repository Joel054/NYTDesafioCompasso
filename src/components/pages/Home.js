import React, { Component } from "react";
import CardHome from '../Card/cardHome';
import Grid from '@material-ui/core/Grid';

export default class Home extends Component {
    componentDidMount(){
    }
    render(){
        const cardInfo ={
            img1 : "/tecnologia.png",
            img2 : "/ciencia.jpg",
            title1 :"Ciência",
            title2 :"Tecnologia",
            link1 : "/Science",
            link2 :"/Technology",
        }
        return(
            <Grid container justify="center" className="gridhome" spacing={3}>
                <Grid item xs={3}>
                    <CardHome 
                        image={cardInfo.img1} 
                        title={cardInfo.title1} 
                        link={cardInfo.link1}   
                    />
                </Grid>
                <Grid item xs={3}>
                    <CardHome
                        image={cardInfo.img2} 
                        title={cardInfo.title2} 
                        link={cardInfo.link2}   
                    />
                </Grid>
            </Grid>
        ) 
    }
}
