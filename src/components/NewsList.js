import React, { Component, Fragment } from "react";
import {NewsScience, NewsTech } from './../services/api';
import Button from '@material-ui/core/Button';
import SimpleModal from './Modal';
import BasicPagination from './Pagination';
import MediaCard from './Card';

export default class Main extends Component {
    state ={
        newsT: [],
        newsS: [],
    }
    componentDidMount(){
        // this.loadNewsTech();
        this.loadNewsSci();
        this.loadNewsTech();
        // executado assim que o componente é exibido na tela
    }

    loadNewsTech =  async() => {
        const data = await NewsTech.get();
        this.setState({newsT: data.request.response.results})
        console.log(data.request);
    }
    loadNewsSci =  async() => {
        const data = await NewsScience.get();
        this.setState({newsS: data.request.response.results})
    }
    render(){
        const science = this.state.newsS;
        const technologie = this.state.newsT;
        return(
            <Fragment>
                
                <SimpleModal></SimpleModal>
                <Button variant="contained" color="primary">
                    Olá Mundo
                </Button>
                <BasicPagination/>
                <MediaCard/>
                <hr/>
                {/* {technologie[1]} */}
                <hr/>
                    <h1>A quantidade de noticias é:{science.length}</h1>
                        <p>sci:</p>
                        {science.map(news =><li key ={news._id}>
                            {news.title}<br/>
                            {news.url}<br/>
                            <small>{news.abstract}</small>
                            <br/>
                        </li>)}   

                    <hr/>
                    tech:<h1>{technologie.length}</h1>
                    {technologie.map(news =>
                        <li key ={news._id}> 
                            {news.title}<br/>
                            {news.url}<br/>
                            <small>{news.abstract}</small>
                            <br/>
                            <img src={news.multimedia[0].url}/>
                            <img src={news.multimedia[1].url}/>
                            {/* <p>{news.multimedia[0].url}</p> */}
                            {/* {console.log(news.multimedia[0].url)} */}
                            <br/>
                        </li>)}                     
            </Fragment> 
        ) 
    }
}
