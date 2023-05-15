const fetch = require('node-fetch');

const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '053266da20msh45bdcbabc5e923dp1f9900jsn7ebe60fae729',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const api=async()=>{
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result, "api result ");
    } catch (error) {
        console.error(error);
    }
}
api()