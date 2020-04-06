import axios from 'axios';

export const NewsTech = axios.create({ 
    // baseURL : {BASE_URL} + 'technology'+'.json?&api-key=' + {key};
    baseURL : 'https:api.nytimes.com/svc/topstories/v2/technology.json?&api-key=Zzlh06XfQI0BbsJDpc2XweBi3PbVnvX1',
    responseType: "json",
});
export const NewsScience = axios.create({ 
    baseURL : 'https://api.nytimes.com/svc/topstories/v2/science.json?&api-key=Zzlh06XfQI0BbsJDpc2XweBi3PbVnvX1',
    responseType: "json",
});
