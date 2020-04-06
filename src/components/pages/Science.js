import React, { Component, Fragment } from "react";
import LinkWrapper from '../LinkWrapper';
import {NewsScience} from '../../services/api'
import CardNews from './../Card';
import Box from '@material-ui/core/Box';
export default class science extends Component {
    state ={
        news: [],
    }
    componentDidMount(){
        // this.loadNewsTech();
        this.loadNews();
        // executado assim que o componente é exibido na tela
    }
    loadNews =  async() => {
        const data = await NewsScience.get(); //MUDAR AQUI PARA TECHNOLOGY
        this.setState({news: data.request.response.results})
    }
    render(){
        const article = this.state.news;
        return(
            <Box display="block" flexWrap="nowrap" justifyContent="wrapper">
                {/* <SimpleModal></SimpleModal> */}
                <h1>A quantidade de noticias Science é:{article.length}</h1>
                {article.map(news =>
                        <CardNews key ={news._id} image={news.multimedia[4].url} title={news.title} content={news.abstract} link={news.url} ></CardNews>
                )}                    
                {/* <BasicPagination/>     */}
            </Box>
        ) 
    }
}