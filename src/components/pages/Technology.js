import React, { Component } from "react";
import { NewsTech } from '../../services/api'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardNews from './../Card';
import { Fragment } from "react";
import Header from './../Header';
import './../Card/style.css'
export default class science extends Component {
    state = {
        news: [],
    }
    componentDidMount() {
        this.loadNews();
        // executado assim que o componente é exibido na tela
    }
    loadNews = async () => {
        const data = await NewsTech.get();
        this.setState({ news: data.request.response.results })
    }
    render() {
        const article = this.state.news;
        return (
            <Fragment>
                <Header/>
                <Container maxWidth="lg">
                    <Grid container justify="center" xs={12} spacing={3}>
                        <Grid justify="center" item xs={12}>
                        <Typography gutterBottom >
                            <h1 style={{textAlign :"center", padding: "20px"}} >
                                Principais notícias sobre Tecnologia do New York Times
                            </h1>
                            <h3 style={{textAlign :"center", padding: "20px"}} >Atualmente possuimos {article.length} notícias nesta categoira</h3>
                        </Typography>
                            
                        </Grid>
                        {article.map(news =>
                            <Grid item xs={4} className="centerCard">
                                <CardNews justify="center"
                                    key={news._id}
                                    image={news.multimedia[3].url}
                                    imageG={news.multimedia[0].url}
                                    title={news.title}
                                    content={news.abstract}
                                    link={news.url}
                                    category='Ciência'
                                />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Fragment>
        )
    }
}