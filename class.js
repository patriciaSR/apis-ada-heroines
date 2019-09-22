'use strict';

const button = document.querySelector('.button');

function getHeroines() {

const heroineId = '5ff92a6d-8a60-4eb6-8aa3-324ed1413498' 
  const ENDPOINT = `https://heroines-api.herokuapp.com/ada-heroines/${heroineId}`;
  
  const headers = {
    'Content-Type': 'aplication/json',
    Accept: 'aplication/json',
    'Authorization': ``
  }

  const options = {
    headers: headers,
    method: 'GET'
  }

  fetch(ENDPOINT)
  .then(response => response.json())
  .then(heroines => console.log(heroines))
}

button.addEventListener('click', getHeroines);