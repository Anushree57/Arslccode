const axios = require('axios');
const fs = require('fs').promises;

axios.get('https://ghibliapi.herokuapp.com/films')
  .then((response)=>{
    console.log('successfully retrieved our list of movies');
	response.data.forEach(movie=>{
	  console.log(`${movie['title']},$
{movie['release_date']}`);
    });
 })	
	    