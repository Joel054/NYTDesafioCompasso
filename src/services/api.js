import axios from 'axios';

// export const getNewsTech = () =>{
//     const URL_TECH = "https://api.nytimes.com/svc/topstories/v2/technology.json?&api-key=Zzlh06XfQI0BbsJDpc2XweBi3PbVnvX1";
//     const tech = axios.create({ baseURL : URL_TECH});
//     return tech;
// }
// const BASE_URL: 'https://api.nytimes.com/svc/topstories/v2/';
// const KEY :'Zzlh06XfQI0BbsJDpc2XweBi3PbVnvX1';

export const NewsTech = axios.create({ 
    // baseURL : {BASE_URL} + 'technology'+'.json?&api-key=' + {key};
    baseURL : 'https:api.nytimes.com/svc/topstories/v2/technology.json?&api-key=Zzlh06XfQI0BbsJDpc2XweBi3PbVnvX1',
    responseType: "json",
});

export const NewsScience = axios.create({ 
    baseURL : 'https://api.nytimes.com/svc/topstories/v2/science.json?&api-key=Zzlh06XfQI0BbsJDpc2XweBi3PbVnvX1',
    responseType: "json",
});

// () =>{
//     const URL_TECH = "https://api.nytimes.com/svc/topstories/v2/technology.json?&api-key=Zzlh06XfQI0BbsJDpc2XweBi3PbVnvX1";
//     const tech = axios.create({ baseURL : URL_TECH});
//     return tech;
// }
// export const getNewsScience = () =>{
//     const URL_SCIENCE = "https://api.nytimes.com/svc/topstories/v2/science.json?&api-key=Zzlh06XfQI0BbsJDpc2XweBi3PbVnvX1";
//     const science = axios.create({ baseURL : URL_SCIENCE});
//     return science;
// }

// axios.get('http').then(res => { const teste = res.let})

// export default {getNewsScience, getNewsTech};



