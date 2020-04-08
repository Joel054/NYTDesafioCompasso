import React, { Component } from "react";
import { NewsScience } from '../../services/api'
import Container from '@material-ui/core/Container';
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
    }
    loadNews = async () => {
        const data = await NewsScience.get();
        this.setState({ news: data.request.response.results })
    }
    render() {
        const article = this.state.news;
        return (
            <Fragment>
                <Header />
                <Container maxWidth="lg">
                    <Grid container justify="center" xs={12} spacing={3}>
                        <Grid justify="center" item xs={12}>
                            <h1 >A quantidade de noticias Science é:{article.length}</h1>
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